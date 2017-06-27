import React, {Component} from 'react';

// css
import './App.css';

class App extends Component{
  render(){
    return(
      <div className='App'>
        <div className='App-title'>Countdown to December 25, 2017</div>
        <div>
          <div className='Clock-days'>14 Days</div>
          <div className='Clock-hours'>30 Hours</div>
          <div className='Clock-minutes'>15 Minutes</div>
          <div className='Clock-seconds'>30 Seconds</div>
        </div>
        <input type='text' placeholder='new date'/>
        <button>Submit</button>
      </div>
    )
  }
}

export default App;