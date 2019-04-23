import React, { Component } from "react";
import JourneyHeader from './JourneyHeader';
import Quiz from './Quiz';
import './Journey.css';

class Journey extends Component {
    constructor(props) {
        super(props);
        this.state = {
            now_state: 0,
            user_answer: [],
            quizs: [
                {
                    id: 1,
                    question: "Waht's Going On?",
                    options:[
                        {
                            id: 1,
                            option: "I have a lump/rash/discharge/swelling down there."
                        },
                        {
                            id: 2,
                            option: "I'm hurting someone pyhsically or emotionally."
                        },
                        {
                            id: 3,
                            option: "I hurt or injure myself on purpose."
                        },
                        {
                            id: 4,
                            option: "I'm treated badly by my family."
                        }
                    ]
                },
                {
                    id: 2,
                    question: "What would you like to work on first?",
                    options:[
                        {
                            id: 1,
                            option: "I'm feeling stressed, anxious, worried or down."
                        },
                        {
                            id: 2,
                            option: "I'm getting bullied."
                        },
                        {
                            id: 3,
                            option: "I'm having problems with people close to me."
                        },
                        {
                            id: 4,
                            option: "I've been through someting really traumatic."
                        }
                    ]
                }
            ]
        }

        this.handleContinue = this.handleContinue.bind(this);
        this.handlePrevious = this.handlePrevious.bind(this);
    }

    handleContinue() {
        const now_state = this.state.now_state + 1;
        this.setState({now_state});
    }

    handlePrevious() {
        const now_state = this.state.now_state - 1;
        if(now_state >= 0)
            this.setState({now_state});
    }
    

    render() {
        const index = this.state.now_state;
        let quiz;
        if (index < this.state.quizs.length)
            quiz = this.state.quizs[index]; 

        return (
            <div className="journey"> 
                <JourneyHeader />
                <div style={{padding: "4%"}}>
                    <Quiz 
                        key={quiz.id}
                        quiz={quiz}
                        onContinue={this.handleContinue}
                        onPrevious={this.handlePrevious}
                    />
                </div>
            </div>
        )
    }
}

export default Journey;