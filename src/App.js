import React, { Component } from 'react';
import './App.scss';

import ProfileData from './data/profileData'
import Profile from './components/profile';
import Admin from './components/Admin';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Profile />
      </div>
    );
  }
}

export default App;
