import React, { Component } from "react";
import SoicalHeader from "./SoicalHeader";
import SocialMap from "./SocialMap";
import axios from "axios";
import SoicalHelperList from './SocialHelperList';
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyCveklRpuoX0JEn69iGao3zwdEtK_Egf4g");

class SoicalHelpPage extends Component {
    constructor (props) {
        super(props);
        this.state = {
            userlocation: {
                lat: -37.813628,
                lng: 144.963058,
            },
            userAddress: "350 Bourke St, Melbourne VIC 3000, Australia",
            userPostcode: 3000,
            locationLoad: false,
            helpers: [],
            helpType: "relief",
            userInput: "",
            didUserInput: false,
            findInputLocation: false,
            userInputLocation: {},
        }
        this.handleChangeType = this.handleChangeType.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(props) {
        const url = '/api/relief_pro/'+ this.state.userPostcode;

        navigator.geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords;
                
                console.log(latitude, longitude)
                this.setState({
                    userlocation: {lat: latitude, lng: longitude},
                    locationLoad: true,
                }); 
            },
        );

        axios.get(url)
            .then(response => response.data)
            .then((data) => {
                console.log(data);
                this.setState({helpers: data});
            })
    }

    componentDidUpdate (prevProps, prevState) {
        if (prevState.userlocation.lat !== this.state.userlocation.lat && this.state.locationLoad){
            const {lat, lng} = this.state.userlocation;
            Geocode.fromLatLng(lat, lng).then(
                response => {
                    const address = response.results[0].formatted_address;
                    console.log(address);
                    const post = address.split(", ")[1].split(" ");
                    console.log(post[post.length-1]);
                    this.setState({
                        userAddress: address,
                        userPostcode: post[post.length-1],
                    })
                }
            )
        } 
        if (prevState.userPostcode !== this.state.userPostcode) {
            console.log("update helpers");
            let url;
            if (this.state.helpType == "relief")
                url = '/api/relief_pro/' + this.state.userPostcode;
            else if (this.state.helpType == "hospital")
                url = '/api/hospital/' + this.state.userPostcode;
            
            axios.get(url)
                .then(response => response.data)
                .then((data) => {
                    this.setState({helpers: data});
                })
        }
        if (prevState.userInput !== this.state.userInput && this.state.findInputLocation){
            console.log("process user input")
            const userInput = this.state.userInput;
            let url;
            let address;
            if(/^\d+$/.test(userInput)){
                if(this.state.helpType == "relief")
                    url = '/api/relief_pro/' + userInput;
                else if (this.state.helpType == "hospital")
                    url = '/api/hospital/' + userInput;
                address = userInput + " VIC";
            } else {
                if(this.state.helpType == "relief")
                    url = '/api/relief_pro_lga/' + userInput;
                else if (this.state.helpType == "hospital")
                    url = '/api/hospital_lga/' + userInput;
                address = userInput + " LGA";
            }

            Geocode.fromAddress(address).then(
                response => {
                    const {lat, lng} = response.results[0].geometry.location;
                    console.log({lat, lng})
                    this.setState({
                        userInputLocation: {lat: lat, lng: lng},
                    })
                }
            )

            axios.get(url)
                    .then(response => response.data)
                    .then((data) => {
                        //console.log(data);
                        this.setState({helpers: data});
                    })
        }
    }

    handleChangeType (type) {
        if (this.state.findInputLocation){
            const userInput = this.state.userInput;
            if (type !== this.state.type){
                let url;
                if(/^\d+$/.test(userInput)){
                    if(type == "relief")
                        url = '/api/relief_pro/' + userInput;
                    else if (type == "hospital")
                        url = '/api/hospital/' + userInput;
                } else {
                    if(type == "relief")
                        url = '/api/relief_pro_lga/' + userInput;
                    else if (type == "hospital")
                        url = '/api/hospital_lga/' + userInput;
                }

                axios.get(url)
                    .then(response => response.data)
                    .then((data) => {
                        //console.log(data);
                        this.setState({helpers: data});
                    })
                this.setState({helpType: type});
            }      
        }
        else{
            const postcode = this.state.userPostcode;
            if (type !== this.state.type){
                let url;
                if (type == "relief")
                    url = '/api/relief_pro/' + postcode;
                else if (type == "hospital")
                    url = '/api/hospital/' + postcode;
                
                axios.get(url)
                    .then(response => response.data)
                    .then((data) => {
                        //console.log(data);
                        this.setState({helpers: data});
                    })
                this.setState({helpType: type});
            }
        }
    }

    handleSubmit(userInput) {
        if(userInput !== ""){
            let url;
            if(/^\d+$/.test(userInput))
                url = "/api/lga_post/check_post/" + userInput;
            else
                url = "/api/lga_post/check_LGA/" + userInput
            axios.get(url)
                .then(response => response.data)
                .then((data) => {
                    if (data[0]["result"] == "exist"){
                        this.setState({
                            userInput: userInput,
                            didUserInput: true,
                            findInputLocation: true,
                        })
                    }
                    else
                        this.setState({
                            userInput: userInput,
                            didUserInput: true,
                            findInputLocation: false,
                            userInputLocation: {},
                        })
                })
        }
        else
            this.setState({
                userInput: userInput,
                didUserInput: false,
                findInputLocation: false,
                userInputLocation: {},
            })
    }

    render () {
        const userlocation = this.state.userlocation;
        //console.log (userlocation);
        const helpers =  this.state.helpers;

        return (
            <div>
                <SoicalHeader onSearch={this.handleSubmit}/>
                <SocialMap 
                    center = {this.state.findInputLocation ? this.state.userInputLocation : userlocation}
                    userlocation={userlocation}
                    helpers={helpers}
                />
                <SoicalHelperList 
                    type = {this.state.helpType}
                    changeType = {this.handleChangeType}
                    helpers = {helpers}
                />
            </div>
        );
    }
}

export default SoicalHelpPage;
