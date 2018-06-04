import React, { Component } from 'react';
import { fetchQuestionById } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export class QuestionById extends React.Component {

    constructor(props){
        super(props)
        console.log('this.props', this.props.question)
      }

      componentDidMount(){
        
        // this.props.fetchQuestionById(this.props.match.params.id)
        this.props.fetchQuestionById('5b15351acde1319ee31d16ab')
      }


    render(){
   console.log('this.props in render', this.props)
       return (
           'View of single question'
       )
      }
}

  function mapStateToProps (state){
    console.log('state', state.questions)
    return {
      question: state.questions
    };
  }

  function mapDispatchToProps(dispatch){
    return bindActionCreators ({ fetchQuestionById }, dispatch)
  }

export default connect(mapStateToProps, mapDispatchToProps)(QuestionById)