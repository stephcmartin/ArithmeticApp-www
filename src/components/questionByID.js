import React, { Component } from 'react';
import { fetchQuestionById } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export class QuestionById extends React.Component {

    constructor(props){
        super(props)
        console.log('consturctor props is this', props)
      }

      componentDidMount(){
        this.props.fetchQuestionById('5b10925a70ef6b09da172c58')
      }


    render(){
        console.log("props", this.props.question)
        return (
            'hello'
        )
      }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators ({ fetchQuestionById }, dispatch)
  }

  function mapStateToProps (state){
      console.log('state.question', state.question)
    return {
      question : state.question
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(QuestionById)