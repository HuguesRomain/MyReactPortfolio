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


class AppHome extends Component {
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
          <div className="profile__content">
          <Profile />
          </div>
          <div className='content'>
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

export default AppHome;
