import React, { Component } from "react";
import './Quiz.css';
import PropTypes from 'prop-types';

class Quiz extends Component {
    /*static propTypes = {
        quiz: PropTypes.object.isRequired,
        active_state: PropTypes.array.isRequired,
        onContinue: PropTypes.function.isRequired,
    }*/

    constructor(props){
        super(props);

        this.state = {
            answerOption: [],
        };

        this.handleContinue = this.handleContinue.bind(this);
        this.handlePrevious = this.handlePrevious.bind(this);
    }

    handleContinue(e) {
        e.preventDefault();
        this.props.onContinue();
    }

    handlePrevious(e) {
        e.preventDefault();
        this.props.onPrevious();
    }

    renderButtons() {
        const num = this.props.quiz.id;
        if (num == 1)
            return (
                <div id="jou-btn" className="row d-flex flex-row justify-content-around">
                    <button className="btn btn-black" onClick={this.handleContinue}>
                        Continue
                    </button>
                </div>
            );
        else
            return (
                <div id="jou-btn" className="row d-flex flex-row justify-content-around">
                    <button className="btn btn-black" onClick={this.handlePrevious}>
                        Previous
                    </button>
                    <button className="btn btn-black" onClick={this.handleContinue}>
                        Continue
                    </button>
                </div>
            )
    }

    render() {
        const num = this.props.quiz.id;
        const question = this.props.quiz.question;
        const options = this.props.quiz.options.map((option, index) => (
            <div className="col-md-6 col-sm-12" id={option.id} key={option.id}>
                <label className="element-animation1 btn btn-lg btn-primary btn-block active"><span className="btn-label"><i className="glyphicon glyphicon-chevron-right"></i></span> {option.option} </label>
            </div>
        ));

        return (
            <div className="container-fluid">
                <div className="modal-quiz">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3><span className="label label-warning" id="qid">{num}</span> {question}</h3>
                        </div>
                        <div className="modal-body">
                            <div className="quiz" id="quiz" data-toggle="buttons">
                                <div className="row flex-row d-flex">
                                    {options}
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            {this.renderButtons()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Quiz;