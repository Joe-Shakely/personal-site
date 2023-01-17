import React, { Component } from 'react';

class DunkContest extends Component {
  render() {
    return (
      <video controls width="100%" poster="./images/dunkpic.jpg"><source src="./images/Dunk Contest.mp4" /><track kind="captions" /></video>
    );
  }
}

export default DunkContest;
