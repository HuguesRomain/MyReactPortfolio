import React, { Component } from 'react'

const RepoCards = ({detailsRepo}) => {
  return (
    <div>
    <div className='repo__card-comingsoon'> 
        <div className="repo__title"> 
          {detailsRepo.name}
        </div>
      </div>
    </div>
  )
}

export default RepoCards