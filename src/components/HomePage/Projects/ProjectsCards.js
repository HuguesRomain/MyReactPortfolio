import React from 'react'

const ProjectCards = ({ detailsProjects }) => {
  return (
   <a href={detailsProjects.link} rel="noopener noreferrer" target="_blank"> 
     <li className='project__card'>
     <img className='project__pic' alt='projects' src={require(`../../../img/projects/${detailsProjects.projectPic}`)} />
     <div className="project__text">
         <div className="project__title">
         {detailsProjects.title}
         </div>
          <div className="project__description">
            {detailsProjects.description}
          </div>
        </div>
    </li>
    </a>
  )
}

export default ProjectCards