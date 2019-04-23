import React, { Component } from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Header.css';


class Header extends Component {
    render () {
        return (
            <div className="masthead">
                <div className="container h-100">
                    <div className="row h-100 align-items-center justify-content-center text-center">
                        <div className="col-lg-10 align-self-end">
                            <h1 className="text-uppercase text-white font-weight-bold">Help YourSelves, Help Others</h1>
                            <br className="divider my-4"></br>
                        </div>
                        <div className="col-lg-8 align-self-baseline">
                                <p className="text-white-75 font-weight-light mb-5">We help provide victims a support network for when they are willing to make a change.</p>
                                <AnchorLink className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</AnchorLink>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;