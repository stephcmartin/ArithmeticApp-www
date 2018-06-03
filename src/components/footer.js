import React, { Component } from 'react';

const footer = {
  textAlign: 'center',
  background: '#9ed1e8',
  position: 'relative',
  height: "48px",
  bottom: "0px",
  width: "100%",
}

export default class Footer extends Component {

  render() {
    return (
      <div className="footer" style={footer}>
        <p>This <em>very unfinished project</em> was created by Stephanie Martin Connelly</p>
      </div>
    );
  }
}
