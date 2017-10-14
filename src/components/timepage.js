import React, { Component } from 'react';
import Clock from 'react-live-clock';
import './App.css';
import BackgroundImage from './icons/clock.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header" />

        <h2 className="App-title">Manoj TimeZone - Sydney, Australia</h2>

        <Clock
          format={'dddd, MMMM Mo, YYYY, h:mm:ss A'}
          ticking={true}
          timezone={'Australia/Sydney'}
        />

        <h2 className="App-title">Hameed TimeZone - New York, US</h2>
        <Clock
          format={'dddd, MMMM Mo, YYYY, h:mm:ss A'}
          ticking={true}
          timezone={'US/Eastern'}
        />
        <h2 className="App-title" />
        <img src={BackgroundImage} alt="" />

        <h2 className="App-title">Satish, Sakthi TimeZone - London, UK </h2>
        <Clock
          format={'dddd, MMMM Mo, YYYY, h:mm:ss A'}
          ticking={true}
          timezone={'Europe/London'}
        />
        <h2 className="App-title">
          Pradeep, Rajeesh, Shekhar, Santosh TimeZone - Bangalore, INDIA
        </h2>
        <Clock
          format={'dddd, MMMM Mo, YYYY, h:mm:ss A'}
          ticking={true}
          timezone={'Asia/Kolkata'}
        />
      </div>
    );
  }
}

export default App;
