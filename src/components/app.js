import React, { Component } from 'react';
import Questions from './Questions'
import CreateQuestion from './createQuestion'

export default class App extends Component {

  render() {
    return (
      <div className="container">
        <h1>Welcome to Arithmetic App</h1>
        <CreateQuestion />
        <Questions />
        <p>Created By Stephanie Martin Connelly</p>
      </div>

    );
  }
}
