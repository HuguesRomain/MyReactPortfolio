import React, { Component } from 'react'
import navData from '../../data/navData'
import NavElements from './NavElements'


class Navigation extends Component {
  state = {
    navDataState: {navData}
  }
  render () {
    return (
      <div className='navigation'>
        <div className="curseur"></div>
        <NavElements/>
      </div>
    )
  }
}

export default Navigation