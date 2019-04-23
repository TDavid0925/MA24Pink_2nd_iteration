import React, { Component } from "react";

class InfoWindow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const helper = this.props.helper;
        return (
           <div className="card" >
            <div className="card-body">
                <h5 className="card-title">{helper["Outlet Name"]}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{helper["Organisation Name"]}</h6>
                <p className="card-text"><span style={{"font-weight": "bold"}}>Address: </span> {helper.Address}</p>
                <p className="card-text"><span style={{"font-weight": "bold"}}>LGA: </span> {helper.LGA}</p>
                <p className="card-text"><span style={{"font-weight": "bold"}}>Postcode: </span> {helper.Postcode}</p>
                <p className="card-text"><span style={{"font-weight": "bold"}}>Website: </span> {helper.Website}</p>
                <a href={helper.Website} className="card-link">Vist Them</a>
            </div>
           </div>
        );
    }

}

export default InfoWindow;