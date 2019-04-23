import React, { Component } from "react";
import Header from './Header';
import About from './About';
import Services from './Services';

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <About />
                <Services />
            </div>
        );
    }
}

export default Home;