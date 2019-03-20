import React, { Component } from 'react'

const RepoCards = ({detailsRepo}) => {
  return (
    <a href={detailsRepo.html_url} target="_blank">
    <div className='repo__card'>
      <ul className='repo__list'> 
        <li className="repo__title"> 
          Name : {detailsRepo.name}
        </li>
        <li className="repo__description">
          Descirption : {detailsRepo.description}
        </li>
        <li className="repo__language">
          Language : {detailsRepo.language}
        </li>
      </ul>
    </div>
    </a>
  )
}

export default RepoCards