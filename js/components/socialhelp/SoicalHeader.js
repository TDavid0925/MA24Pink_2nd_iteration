import React, { Component } from "react";
import './SoicalHeader.css';

class SoicalHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: "",
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e){
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.onSearch(this.state.userInput);
        this.setState({
            userInput: "",
        })
    }

    render() {
        return (
            <section className="search-banner text-white py-3 form-arka-plan" id="search-banner">
                <div className="container py-5 my-5">
                    <div className="row text-center pb-4">
                        <div className="col-md-12">
                            <h1 className="text-uppercase text-white font-weight-bold">Find the Social Help near you</h1>
                        </div>
                    </div>
                    <div className="row" >
                        <div className="col-md-12">
                            <div className=" acik-renk-form" id="header_card">
                                <div className="card-body" id="header-search">
                                    <p className="font-weight-light text-dark text-center">Seach by LGA or postcodes in Victoria to find your local services</p>
                                    <div className="row">
                                        <div className="col-md-9">
                                            <div className="form-group ">
                                                <input 
                                                    type="text"
                                                    className="form-control"
                                                    name="userInput"
                                                    value={this.state.userInput}
                                                    onChange={this.handleInput} 
                                                    placeholder="LGA or postcode" 
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <button 
                                                type="button" className="btn btn-warning  pl-5 pr-5"
                                                onClick={this.handleSubmit}
                                            >Search</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default SoicalHeader;