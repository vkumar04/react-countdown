import React, { Component } from 'react';
// imports
import './App.css';

class Clock extends Component {
  render() {
    return (
      <div>
        <div className='Clock-days'>14 Days</div>
        <div className='Clock-hours'>30 Hours</div>
        <div className='Clock-minutes'>15 Minutes</div>
        <div className='Clock-seconds'>30 Seconds</div>
      </div>
    )
  }
}

export default Clock;