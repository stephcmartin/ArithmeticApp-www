import React, { Component } from 'react';
import { fetchQuestions } from '../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash'

export class QuestionSummary extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchQuestions()
  }

  render(){
    console.log(this.props.questions.questions)
    if (this.props.loading){
      return <div> 'Data is loading' </div>
    }

    const renderQuestions = _.map(this.props.questions.questions, question => {
       return <li key={question._id}> {question.question} </li>
      }
    )
    return(
      <div>
        <button onClick={() => {this.props.history.push('/questions/new')}}> Create New </button>
        <ul>
        {renderQuestions}
        </ul>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators ({ fetchQuestions }, dispatch)
  }

  function mapStateToProps (state){
    return {
      questions : state.questions,
      loading: state.questions.loading
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(QuestionSummary)
