import React, { Component } from 'react'
import gitData from '../../data/gitData'

class RepoCards extends Component {
  state = {
    GitDataState: {gitData}
  }
  render () {
    return (
      <div className='repo__card'> 
        <div className="repo__title"> 
         
        </div>
      </div>
    )
  }
}

export default RepoCards