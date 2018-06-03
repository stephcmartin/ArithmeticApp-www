import React, { Component } from 'react';
import { connect } from 'react-redux'
import { postQuestion } from '../actions/index';


export class createQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      question: '',
      answer: '',
      distractors: '',
    }

    // This binding is necessary to make `this` work in the callback
    this.formClickHandeler = this.formClickHandeler.bind(this);
  }


  formClickHandeler(e, values) {
    e.preventDefault()
    this.props.postQuestion(this.state)
  }

  onInputChange(name, value){
    let newState={}
    newState[name] = value 
    this.setState(newState)
  }

  render() {
    return (
      <div className="container createQuestion">
      <h3>Create a question</h3>
      <p><em>*All form fields are required</em></p>
      <form onSubmit={this.formClickHandeler}>
        <label>
          Question:
          <input value={this.state.question} 
          type="text" 
          name="question" 
          onChange={e => this.onInputChange('question', e.target.value)
          }/>
        </label>
        <label>
          Answer:
          <input value={this.state.answer} 
          type="text" 
          name="answer" 
          onChange={e => this.onInputChange('answer', e.target.value)}/>
        </label>
        <label>
          Distractors:
          <input value={this.state.distractors} 
          type="text" 
          name="distractors" 
          onChange={e => this.onInputChange('distractors', e.target.value)}/>
        </label>
          <input type="submit" className="btn btn-primary"/>
      </form>
      </div>
    );
  }
}

export default connect (null,{ postQuestion })(createQuestion)