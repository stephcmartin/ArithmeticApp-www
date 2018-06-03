import React, { Component } from 'react';
import { fetchQuestions } from '../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';

export class QuestionSummary extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchQuestions()
  }

  render(){
    if (this.props.loading){
      return <div> 'Loading...' </div>
    }

    const renderQuestions = _.map(this.props.questions.questions, question => {
       return (
       <div className="col-md-8 list-group">
        <Link to ={"/questions/" + question._id}>
        <li key={question._id}> Question: {question.question} </li>
        <button className="btn btn-primary">View</button>
        <button className="btn btn-danger">Delete</button>
        </Link>
      </div>
       )
       
      }
    )
    return(

      <div>
        <button className="createNew btn btn-primary" onClick={() => {this.props.history.push('/questions/new')}}> Create New </button>
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
