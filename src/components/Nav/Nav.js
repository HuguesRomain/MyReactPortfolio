import React, { Component } from 'react'
import navData from '../../data/navData'
import NavElements from './NavElements'


class Navigation extends Component {
  render () {
    return (
      <div className='navigation'>
        <NavElements/>
      </div>
    )
  }
}

export default Navigation