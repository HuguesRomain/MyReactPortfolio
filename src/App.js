import React, { Component } from 'react';
import './App.scss';

import Profile from './components/Profile/Profile';

import skillsData from './data/skillsData'
import Skills from './components/Skills/Skills'

class App extends Component {
  state = {
    Skills: {skillsData}
  }

  render() {
    return (
      <div className="App">
        <div className="page">
          <div className='profile'>
          <Profile />
          </div>
          <div className='content'>
            <div className='MySkills'>
              <img className='icon' src={require(`./img/icon/${this.state.Skills.skillsData.skillsTitle.skillsicon}`)}/>
              <p className='MySkills__title'>{this.state.Skills.skillsData.skillsTitle.title}</p>
            </div>
            <Skills/>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
