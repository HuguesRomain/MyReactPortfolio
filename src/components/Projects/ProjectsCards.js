import React, { Component } from 'react'
import projectsData from '../../data/projectsData'
import {Link} from 'react-router-dom'

const ProjectCards = ({ detailsProjects }) => {
  return (
   <Link href={detailsProjects.link}><div className='project__card'>
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
    </Link>
  )
}

export default ProjectCards