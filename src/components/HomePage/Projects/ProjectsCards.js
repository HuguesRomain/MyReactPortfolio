import React, { Component } from 'react'

import {Link} from 'react-router-dom'

const ProjectCards = ({ detailsProjects }) => {
  return (
   <a href={detailsProjects.link}  target="_blank"><div className='project__card'>
     <img className='project__pic'  src={require(`../../../img/projects/${detailsProjects.projectPic}`)} />
     <div className="project__text">
         <div className="project__title">
         {detailsProjects.title}
         </div>
          <div className="project__description">
            {detailsProjects.description}
          </div>
        </div>
    </div>
    </a>
  )
}

export default ProjectCards