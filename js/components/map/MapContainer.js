import React, { Component } from "react";
import Map from "./Map";
import InfoWindow from "./InfoWindow";
import ReactDOM from "react-dom";

var markers = [];

class MapContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.center);
        return (
            <Map
                id="myMap"
                options={{
                    center: this.props.center,
                    zoom: 9,
                }}
                onMapLoad={map => {
                    var marker = new window.google.maps.Marker({
                        position: this.props.position,
                        map: map,
                    });
                    this.props.helpers.map(location => {
                        const coordinate = {lat: location.Latitude,lng: location.Longitude}

                        const infoWindow = new window.google.maps.InfoWindow({
                            content: '<div id="infoWindow" />',
                            position: coordinate,
                        });
                        infoWindow.addListener('domready', e => {
                            ReactDOM.render(<InfoWindow helper={location}/>, document.getElementById('infoWindow'))
                        });

                        const help_marker = new window.google.maps.Marker({
                            position: coordinate,
                            map: map,
                            icon: {
                                url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
                            },
                            infowindow: infoWindow,
                        });

                        markers.push(help_marker);

                        google.maps.event.addListener(help_marker, 'click', function() {
                            markers.forEach(function(marker) {
                                marker.infowindow.close(map, marker);
                            });
                            this.infowindow.open(map, this);
                        })
                    })
                }} 
            />
        );
    }
}

export default MapContainer;