import React, { Component } from 'react';
import { fetchQuestionById } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

export class QuestionById extends React.Component {

    constructor(props){
        super(props)
      }

      componentDidMount(){
        this.props.fetchQuestionById(this.props.match.params.id)
      }


    render(){
       return (
         <div className="questionById">
           <h4>Question:</h4>
           <p>{this.props.question.question.question}</p>
           <h4>Answer:</h4>
           <p>{this.props.question.question.answer}</p>
           <h4>Distractor:</h4>
           <p>{this.props.question.question.distractors}</p>
           <button className="btn btn-danger" onClick={()=> {console.log('delete this item', this.props.question.question._id)}}>Delete</button>
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