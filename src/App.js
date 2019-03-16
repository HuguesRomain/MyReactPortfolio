import React, { Component } from 'react';
import './App.scss';

import Profile from './components/Profile/Profile';
import Skills from './components/Skills/Skills'


import skillsData from './data/skillsData'
import projectsData from './data/projectsData'


class App extends Component {
  state = {
    Skills: {skillsData},
    Projects: {projectsData}
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
            <div className="MyProjects">
              <img className='icon' src={require(`./img/icon/${this.state.Projects.projectsData.ProjectTitle.projectsicon}`)}/>
            </div>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
