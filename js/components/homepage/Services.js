import React, { Component } from "react";
import Card from './Card';


class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
            services :[
                {
                    id: 0,
                    title: "Understand Violence",
                    text: "Based on our research we have created innovative resources for those who want to support victims of violence. These facts and figures on family violence and affected members demonstrate the impact of violence in Victoria",
                    img: "..",
                    link:"/",
                },
                {
                    id: 1,
                    title: "Tell Us",
                    text: "You are not alone. Tell us your difficulties. We can provide you with best support options in 4 easy steps.",
                    img: "/dist/images/services_hand.jpeg",
                    link: "/",
                },
                {
                    id: 2,
                    title: "Soical Help",
                    text: "Your support can make a huge difference. What can you do to help the victim? Find local services near you.",
                    img: "..",
                    link: "/",
                }
            ]
        }
    }

    render() {
        const cards = this.state.services.map((service, index) => (
            <div className="col-xs-6 col-md-4" key={service.id}>
                <Card 
                title={service.title}
                text={service.text}
                img={service.img}
                link={service.link}/>
            </div>
        ));

        return (
            <section className="page-section" id="services">
                <div className="container">
                    <h2 className="text-center mt-0">At Your Service</h2>
                    <hr className="divider my-4" />
                    <div className="row">
                        {cards}
                    </div>
                </div>
            </section>
        )
    }
}

export default Services;