import React, { Component } from 'react';
import { fetchQuestions } from '../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SearchBar from './searchBar.js'

import _ from 'lodash';

const listOfQuestions ={
 overflowY: 'scroll',
 height:'400px',
}


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
         <div className="row" key={question._id}>
          <div className="col-md-8">  
            <Link to ={"/questions/" + question._id} onClick={() => {
              console.log('Clicked on id', question._id)
              
            }}>
            <li> 
            Question: {question.question} <br />
            Answer: {question.answer} <br />
            Distractors: {question.distractors}
            </li>
            </Link>
          </div>
          <div className="col-md-4">
          <button className="btn btn-primary"
          onClick={() => 
          {this.props.history.push(`/questions/${question._id}`), console.log('View button clicked on id,', question._id)}}>View</button>
          <button className="btn btn-danger">Delete</button>
          </div>
      </div>
       )
       
      }
    )
    return(
        <div>
      <div className="listOfQuestions" style={listOfQuestions}>
        <ul>
        {renderQuestions}
        </ul>
      </div>
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
