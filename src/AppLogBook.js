import React, { Component } from 'react';
import './App.scss';
import Navigation from './components/Nav/Nav'
import Profile from './components/Profile/Profile';
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'


import skillsData from './data/skillsData'
import projectsData from './data/projectsData'
import gitData from './data/gitData'
import Repo from './components/Repositories/Repo';


class LogBook extends Component {
  state = {
    Skills: {skillsData},
    Projects: {projectsData},
    Git: {gitData}
  }

  render() {
    return (
      <div className="App">
        <Navigation/>
        <div className="page">
          <div className='content'>
           
        </div>
      </div>
    </div>
    );
  }
}

export default LogBook;
