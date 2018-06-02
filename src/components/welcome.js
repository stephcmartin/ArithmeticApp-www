import React, { Component } from 'react';

const welcome = {
  background: 'linear-gradient(-225deg, rgba(0, 153,225,0.85) 0%, rgba(0,174,140,0.57) 100%)',
  padding: '64px 32px',
  width: "100%"
}

export default class Welcome extends Component {

  render() {
    return (
      <div className="welcome" style={welcome}>
        <h1>Welcome to Arithmetic App 🚀</h1>
        <p>We are so glad you decided to join us!</p>
      </div>
    );
  }
}
