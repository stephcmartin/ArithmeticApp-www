import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const welcome = {
  background: 'linear-gradient(-225deg, rgba(0, 153,225,0.85) 0%, rgba(0,174,140,0.57) 100%)',
  padding: '48px 32px',
  textAlign: "center",
  width: "100%"
}
const welcomeText = {
  textAlign: "center",
  padding: '32px 0'
}

export default class Welcome extends Component {

  render() {
    return (
      <div>
        <div className="welcome" style={welcome}>
          <h1>Welcome to <br /> the Arithmetic App 🚀</h1>
          <p>We are so glad you decided to join us!</p>
        </div>
      </div>
    );
  }
}
