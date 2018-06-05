import React, { Component } from 'react';
import { fetchQuestionById } from '../actions/index';
import { deleteQuestionById } from '../actions/index';
import { editQuestionById } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

export class QuestionById extends React.Component {

    constructor(props){
        super(props)
        this.state = {
          isEditing: false,
          question: this.props.question.question.question,
          answer: this.props.question.question.answer,
          distractors: this.props.question.question.distractors
        };

        this.editClickHandeler = this.editClickHandeler.bind(this);
        this.deleteClickHandeler = this.deleteClickHandeler.bind(this);
      }



      deleteClickHandeler() {
        this.props.deleteQuestionById(this.props.question.question._id)
      }

      editClickHandeler(){
        const foo = this.props.question.question
        this.setState({isEditing: !this.state.isEditing})

      }

      handleSubmit(event) {
          alert('Oops! Looks like you found a bug. Sit back and have a coffee while we work on this.');
          // this.props.editQuestionById(this.state)
          event.preventDefault();
          }

      onInputChange(name, value){
        let newState={}
        newState[name] = value
        this.setState(newState)
      }


      componentDidMount(){
        this.props.fetchQuestionById(this.props.match.params.id)
      }


    render(){
      if (this.state.isEditing) {
          return (
          <div className="editingForm">
          <form onSubmit={this.handleSubmit}>
            <label>
              <h4>Question:</h4>
              <input
              value={this.props.question.question.question}
              type="text"
              name="question"
              onChange={e => this.onInputChange('question', e.target.value)}
              />
            </label>
            <label>
              <h4>Answer:</h4>
              <input
              value={this.props.question.question.answer}
              type="text"
              name="answer"
              onChange={e => this.onInputChange('answer', e.target.value)}
            />
            </label>
            <label>
              <h4>Distractors:</h4>
              <input
              value={this.props.question.question.distractors}
              type="text"
              name="distractors"
              onChange={e => this.onInputChange('distractors', e.target.value)}
              />
            </label>
            <br />
              <input type="submit" className="btn btn-info"/>
          </form>
          <Link to ={"/questions"}><p><em><br />Back to list of questions</em></p></Link>
          </div>
          )
        }
       return (
         <div className="questionById">
           <h4>Question:</h4>
           <p>{this.props.question.question.question}</p>
           <h4>Answer:</h4>
           <p>{this.props.question.question.answer}</p>
           <h4>Distractor:</h4>
           <p>{this.props.question.question.distractors}</p>

           <button className="btn btn-info"
           onClick={(e) => {this.editClickHandeler(this)}}>Edit</button>
           <br />

           <button type="submit" className="btn btn-danger"
           onClick={(e) => {this.deleteClickHandeler(this)}}>
           Delete</button>

          <Link to ={"/questions"}><p><em><br />Back to list of questions</em></p></Link>
           </div>
       )
      }
}

  function mapStateToProps (state){
    return {
      question: state.question
    };
  }

  function mapDispatchToProps(dispatch){
    return bindActionCreators ({ fetchQuestionById , deleteQuestionById, editQuestionById}, dispatch)
  }

export default connect(mapStateToProps, mapDispatchToProps)(QuestionById)
