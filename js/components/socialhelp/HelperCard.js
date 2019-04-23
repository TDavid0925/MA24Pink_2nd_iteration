import React, { Component } from "react";
import PropTypes from 'prop-types';
import './HelperCard.css';

class HelperCard extends Component {
    /*static propTypes = {
        helper: PropTypes.array.isRequired,
        type: PropTypes.string.isRequired,
    }*/

    renderHospitalCard(helper) {
        return (
            <div className="card helper-card" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{helper["Outlet Name"]}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{helper["Organisation Name"]}</h6>
                    <p className="card-text"><span style={{"font-weight": "bold"}}>Address: </span> {helper.Address}</p>
                    <p className="card-text"><span style={{"font-weight": "bold"}}>LGA: </span> {helper.LGA}</p>
                    <p className="card-text"><span style={{"font-weight": "bold"}}>Postcode: </span> {helper.Postcode}</p>
                    <p className="card-text"><span style={{"font-weight": "bold"}}>Hospital Type: </span> {helper["Hospital Type"]}</p>
                </div>
            </div>
        )
    }

    renderCharityCard() {

    }

    renderReliefCard(helper) {
        return (
            <div className="card helper-card" style={{width: "18rem"}}>
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
        )
    }

    render(){
        if(this.props.type == "hospital")
            return (
                this.renderHospitalCard(this.props.helper)
            )
        else if (this.props.type == "relief")
            return (
                this.renderReliefCard(this.props.helper)
            )
    }
}

export default HelperCard;