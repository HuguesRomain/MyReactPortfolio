import React, { Component } from 'react'
import projectsData from '../../data/projectsData'

const ProjectCards = ({ detailsProjects }) => {
  return (
    <div className='project__card'>
     <img className='project__pic'  src={require(`../../img/projects/${detailsProjects.projectPic}`)} />
     <div className="project__text">
         <div className="project__title">
         {detailsProjects.title}
         </div>
          <div className="project__description">
            {detailsProjects.description}
          </div>
        </div>
    </div>
  )
}

export default ProjectCards