import React, { Component } from 'react';
import { fetchQuestions } from '../actions/index';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import { connect } from 'react-redux';

export class QuestionSummary extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchQuestions()
  }

renderQuestions(){
  return _.map(this.props.questions, questions =>{
    console.log(this.props.questions)
      {questions}
  })
}

  render(){
    return(
      <div className="container questions">
      <h4>View list of questions</h4>
      {this.renderQuestions()}
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators ({ fetchQuestions }, dispatch)
  }

  function mapStateToProps (state){
    return {
      questions : state.question
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(QuestionSummary)
