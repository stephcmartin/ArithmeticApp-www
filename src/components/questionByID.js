import React, { Component } from 'react';
import { fetchQuestionById } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export class QuestionById extends React.Component {

    constructor(props){
        super(props)
      }

      componentDidMount(){
          console.log('this.props', this.props)
        // this.props.fetchQuestionById(this.props.match.params)
        this.props.fetchQuestionById('5b10925a70ef6b09da172c58')
      }


    render(){
       return (
           'View of single question'
       )
      }
}

  function mapStateToProps (state){
      console.log('state.questions', state.questions)
    return {
      question: state.questions
    };
  }

  function mapDispatchToProps(dispatch){
    return bindActionCreators ({ fetchQuestionById }, dispatch)
  }

export default connect(mapStateToProps, mapDispatchToProps)(QuestionById)