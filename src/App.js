import React, { Component } from 'react';
import './App.scss';
import Profile from './components/HomePage/Profile/Profile';
import Skills from './components/HomePage/Skills/Skills'
import Projects from './components/HomePage/Projects/Projects'


import skillsData from './data/skillsData'
import projectsData from './data/projectsData'
import gitData from './data/gitData'
import Repo from '././components/HomePage/Repositories/Repo';


class App extends Component {
  state = {
    Skills: {skillsData},
    Projects: {projectsData},
    Git: {gitData}
  }

  render() {
    return (
      <div className="App">
          <header className="profile__content">
          <Profile />
          </header>
          <div className='content'>
            <div className="elements">
            <div className='title__content'>
              <img className='icon' src={require(`./img/icon/${this.state.Skills.skillsData.skillsTitle.skillsicon}`)}/>
              <p className='text__title'>{this.state.Skills.skillsData.skillsTitle.title}</p>
            </div>
            <Skills/>
            <div className="title__content">
              <img className='icon' src={require(`./img/icon/${this.state.Projects.projectsData.ProjectTitle.projectsicon}`)}/>
              <p className='text__title'>{this.state.Projects.projectsData.ProjectTitle.title}</p>
            </div>
            <Projects/>
            <div className="title__content">
              <img className='icon' src={require(`./img/icon/${this.state.Git.gitData.GitTitle.icon}`)}/>
              <p className='text__title'>{this.state.Git.gitData.GitTitle.title}</p>
            </div>
            <Repo/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
