import React, { Component } from 'react';

export default class createQuestion extends React.Component {
  render() {
    return (
      <div className="container createQuestion">
      <h4>Create a question</h4>
      <p>All form fields are required</p>
      <form>
        <label>
          Question:
          <input type="text" name="question" />
        </label>
        <label>
          Answer:
          <input type="text" name="answer" />
        </label>
        <label>
          Distractors:
          <input type="text" name="distractors" />
        </label>
          <input type="submit" value="Submit" className="btn btn-primary"/>
      </form>
      </div>
    );
  }
}
