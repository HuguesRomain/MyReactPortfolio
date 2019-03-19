import React, { Component } from 'react'
import gitData from '../../data/gitData'

class RepoCards extends Component {
  state = {
    GitDataState: {gitData}
  }
  render () {
    return (
      <div className='repo__card-comingsoon'> 
        <div className="repo__title"> 
          coming soon
        </div>
      </div>
    )
  }
}

export default RepoCards