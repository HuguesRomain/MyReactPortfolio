import React, { Component } from 'react'
import ProjectCards from './ProjectsCards'
import ProjectsData from '../../../data/projectsData'

class Projects extends Component {
  state = {
    ProjectsDataState: {ProjectsData}
  }
  render () {
  const projectCards = Object.keys(this.state.ProjectsDataState.ProjectsData.MyProjects).map(key => <ProjectCards key={key} detailsProjects={this.state.ProjectsDataState.ProjectsData.MyProjects[key]}></ProjectCards>)
    return (
      <ul className='projects'>
        { projectCards }
      </ul>
    )
  }
}

export default Projects