import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom';
import './Navbar.css';
import PropTypes from 'prop-types';

class Navbar extends Component {

    /*static propTypes = {
        scrolled: PropTypes.bool.isRequired,
        home: PropTypes.bool.isRequired,
    }*/
    constructor (props) {
        super(props);
        this.state = {
            home: true,
            scrolled: false,
        }
    }

    componentWillMount() {
        this.props.history.listen(() => {
            const path = this.props.history.location.pathname;
            console.log('New URL', this.props.history.location.pathname);
            if (path != '/' 
                && path != '/map'
                && path != ''){
                const home = false;
                this.setState({home});
            } else {
                const home = true;
                this.setState({home});
            }
        })
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
            const scrolled = window.scrollY > 100;
            if (scrolled !== this.state.scrolled)
                this.setState({scrolled});
        })
    }

    render() {
        const scrolled = this.state.scrolled;
        const home = this.state.home;
        let class_name = "navbar navbar-expand-lg navbar-light py-3";

        console.log(scrolled)
        if (!home)
            class_name = class_name + " navbar-scrolled";
        else if (scrolled)
            class_name = class_name + " navbar-scrolled" + " fixed-top";
        else
            class_name = class_name + " fixed-top";

        return (
            <nav className={class_name} id="mainNav">
                <div className="container">
                    <Link className="navbar-brand js-scroll-trigger" to="/">Pink</Link>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto my-2 my-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link js-scroll-trigger" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link js-scroll-trigger" to="/">Understand Violence</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link js-scroll-trigger" to="/map">Social Help</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link js-scroll-trigger" to="/journey">Tell Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default withRouter(Navbar);