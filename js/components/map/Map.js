import React, { Component } from "react";

class Map extends Component {

    constructor(props) {
        super(props);
        this.onScriptLoad = this.onScriptLoad.bind(this);
    }

    onScriptLoad() {
        //console.log("start scriptload");
        const map = new window.google.maps.Map(
            document.getElementById(this.props.id),
            this.props.options
        );
        this.props.onMapLoad(map);
    }

    componentDidMount() {
        if (!window.google) {
            console.log("create new google");
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCveklRpuoX0JEn69iGao3zwdEtK_Egf4g';
            var x = document.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(s, x);
            s.addEventListener('load', e => {
                this.onScriptLoad();
            });
        } else {
            this.onScriptLoad()
        }
    }

    componentDidUpdate (prevProps, prevState) {
        if (prevProps.options !== this.props.options && window.google)
            this.onScriptLoad();
    }

    render () {
        return (
            <div style={{ width: "100%", height: 350 }} id={this.props.id} />
        )
    }
}

export default Map;