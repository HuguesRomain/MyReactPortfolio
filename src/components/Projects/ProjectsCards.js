import React, { Component } from 'react'
import projectsData from '../../data/projectsData'

class ProfileCards extends Component {
  state = {
    projects: {projectsData}
  }
  render () {
    return (
      <div className='project__card'>
      <img className='project__pic'  src={require(`../../img/projects/${this.state.projects.projectsData.MyProjects.project1.projectPic}`)} />
      <div className="project__text">
         <div className="project__title">
         {this.state.projects.projectsData.MyProjects.project1.title}
         </div>
          <div className="project__description">
         {this.state.projects.projectsData.MyProjects.project1.description}
          </div>
        </div>
      </div>
    )
  }
}

export default ProfileCards