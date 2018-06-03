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
        this.props.fetchQuestionById('5b10925a70ef6b09da172c58')
      }


    render(){
       return (
           'hello'
       )
      }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators ({ fetchQuestionById }, dispatch)
  }

  function mapStateToProps (state){
    return {
      question : state.questions,
      loading: state.loading
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(QuestionById)