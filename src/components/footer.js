import React, { Component } from 'react';

const footer = {
  textAlign: 'center',
  background: '#f4f4f4',
  position: 'absolute',
  padding: "16px 0px",
  bottom: "0px",
  width: "100%"
}

export default class Footer extends Component {

  render() {
    return (
      <div className="footer" style={footer}>
        <p>Created by Stephanie Martin Connelly</p>
      </div>
    );
  }
}
