import React, {Component} from 'react';
// css
import './App.css';

class App extends Component{
  render(){
    return(
      <div className='App'>
        <div>Countdown to December 25, 2017</div>
        <div>
          <div>14 Days</div>
          <div>30 Hours</div>
          <div>15 Minutes</div>
          <div>30 Seconds</div>
        </div>
        <input type='text' placeholder='new date'/>
        <button>Submit</button>
      </div>
    )
  }
}

export default App;