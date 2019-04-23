import React, { Component } from "react";
import PropTypes from 'prop-types';
import HelperCard from './HelperCard';

class SoicalHelperList extends Component {
    /*static propTypes = {
        changeType: PropTypes.func.isRequired,
        type: PropTypes.string.isRequired,
        helpers: PropTypes.array.isRequired,
    }*/

    constructor(props) {
        super(props);
        this.handleChangeType = this.handleChangeType.bind(this);
    }

    handleChangeType (e, type) {
        e.preventDefault();
        this.props.changeType(type);
    }

    renderCarouselCard(helpers) {
        const length = helpers.length;
        
        
        return (
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            
            </div>
        )
    }

    render() {
        const type = this.props.type;
        const cards = this.props.helpers.map((helper, index) => (
            <div className="col-xs-6 col-md-4" key = {index}>
                <HelperCard 
                    helper={helper}
                    type={this.props.type}
                />
            </div>
        ));

        return (
            <section className="page-section" id="help-list">
                <ul className="nav nav-tabs nav-justified">
                    <li className="nav-item">
                        <a 
                            className={type == "relief" ? "nav-link active" : "nav-link"} 
                            href="#" 
                            onClick={e => this.handleChangeType(e,"relief")}
                        >Relief Providers</a>
                    </li>
                    <li className="nav-item">
                        <a 
                            className={type == "hospital" ? "nav-link active" : "nav-link"} 
                            href="#"
                            onClick={e => this.handleChangeType(e, "hospital")}
                        >Hospital</a>
                    </li>
                    <li className="nav-item">
                        <a 
                            className={type == "charity" ? "nav-link active" : "nav-link"} 
                            href="#"
                            onClick={e => this.handleChangeType(e,"charity")}
                        >Charities</a>
                    </li>
                </ul>
                <div className="container">
                    <div className="row">
                        {cards}
                    </div>
                </div>
            </section>
        );
    }
}

export default SoicalHelperList;