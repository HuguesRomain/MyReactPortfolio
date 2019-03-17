import React, { Component } from 'react'
import ProjectCards from './ProjectsCards'
import projectsData from '../../data/projectsData'

class Projects extends Component {
  state = {
    ProjectsDataState: {projectsData}
  }
  render () {
  const projectCards = Object.keys(this.state.ProjectsDataState.projectsData.MyProjects).map(key => <ProjectCards key={key} detailsProjects={this.state.ProjectsDataState.projectsData.MyProjects[key]}></ProjectCards>)
    return (
      <div className='projects'>
        { projectCards }
      </div>
    )
  }
}

export default Projects