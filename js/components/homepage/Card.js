import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
import PropTypes from 'prop-types';

class Card extends Component {
    /*tatic propTypes = {
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
    }*/

    render() {
        const { title, text, img, link } = this.props;

        return (
            <div className="card ">
                <div className="card-body">
                    
                    <div className="card-content"> 
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{text}</p>
                    </div>
                    <Link to={link} className="btn btn-primary">EEPLORE MORE</Link>
                </div>
            </div>
        );
    }
}

export default Card;