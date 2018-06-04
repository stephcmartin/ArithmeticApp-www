import React, { Component } from 'react';
import { fetchQuestionById , deleteQuestionById } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

export class QuestionById extends React.Component {

    constructor(props){
        super(props)
        this.deleteClickHandeler = this.deleteClickHandeler.bind(this);  
      }

      deleteClickHandeler(e, foo) {
        e.preventDefault()
        console.log('deleting this question', foo)
        this.props.deleteQuestionById(foo)
      }

      componentDidMount(){
        this.props.fetchQuestionById(this.props.match.params.id)
      }


    render(){
      const foo = this.props.question.question._id
      console.log('foo', foo)
       return (
         <div className="questionById">
           <h4>Question:</h4>
           <p>{this.props.question.question.question}</p>
           <h4>Answer:</h4>
           <p>{this.props.question.question.answer}</p>
           <h4>Distractor:</h4>
           <p>{this.props.question.question.distractors}</p>
           <button type="submit" className="btn btn-danger" onClick={(e, foo) => {this.deleteClickHandeler(e, foo)}}>Delete</button>
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
    return bindActionCreators ({ fetchQuestionById }, dispatch)
  }

export default connect(mapStateToProps, mapDispatchToProps)(QuestionById)