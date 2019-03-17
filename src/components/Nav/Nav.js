import React, { Component } from 'react'
import navData from '../../data/navData'
import NavElements from './NavElements'


class Navigation extends Component {
  state = {
    navDataState: {navData}
  }
  render () {
    const navElements = Object.keys(this.state.navDataState.navData.Navigation).map(key => <NavElements key={key} detailsNav={this.state.navDataState.navData.Navigation[key]}></NavElements>)
    return (
      <div className='navigation'>
        { navElements }
      </div>
    )
  }
}

export default Navigation