import React, { Component } from 'react'
import navData from '../../data/navData'

class NavElements extends Component {
  state = {
    NavElements: {navData}
  }
  render () {
    return (
      <div className='nav__elements'>
        <div className="nav__element">
          <img className='navIcon'  src={require(`../../img/icon/${this.state.NavElements.navData.Navigation.item1.navIcon}`)} />
          <p>{this.state.NavElements.navData.Navigation.item1.title}</p>
        </div>
      </div>
    )
  }
}

export default NavElements