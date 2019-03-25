import React from 'react'

const RepoCards = ({detailsRepo}) => {
  return (
    <a href={detailsRepo.html_url} rel="noopener noreferrer" target="_blank">
    <div className='repo__card'>
      <ul className='repo__list'> 
        <li className="repo__title"> 
          <span className='bolder'>Name:</span> {detailsRepo.name}
        </li>
        <li className="repo__description">
         <span className='bolder'>Descirption:</span> {detailsRepo.description}
        </li>
        <li className="repo__language">
        <span className='bolder'>Language:</span> {detailsRepo.language}
        </li>
      </ul>
    </div>
    </a>
  )
}

export default RepoCards