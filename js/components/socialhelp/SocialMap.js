import React, { Component } from "react";
import MapContainer from "../map/MapContainer";
import PropTypes from 'prop-types';

class SoicalMap extends Component {

    /*static propTypes = {
        userlocation: PropTypes.object.isRequired,
        helpers: PropTypes.array.isRequired,
    }*/
    constructor (props) {
        super(props);
    }

    render () {
        const center = this.props.center;
        const userlocation = this.props.userlocation;
        const helpers = this.props.helpers;
        return (
            <section className="page-section bg-primary" id="map_part">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 text-center">
                            <h2 className="text-white mt-0">We've got what you need!</h2>
                            <hr className="divider light my-4"/>
                                <MapContainer 
                                    center={center}
                                    position={userlocation}
                                    helpers={helpers}
                                />  
                        </div>
                    </div>
                </div>
            </section>    
        )
    }
}

export default SoicalMap;