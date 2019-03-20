import React, { Component } from 'react'
import LogBookCard from './LogBookCards';

class LogBook extends Component {
  render () {
    return (
      <div className='LogBook'>
        <LogBookCard/>
      </div>
    )
  }
}

export default LogBook