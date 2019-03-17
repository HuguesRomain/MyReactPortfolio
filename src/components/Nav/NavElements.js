import React, { Component } from 'react'
import navData from '../../data/navData'

/* class NavElements extends Component {
  state = {
    NavElements: {navData}
  }
  render () {
    return (
      <div className='nav__elements'>
        <div className="nav__element">
          <img className='navIcon'  src={require(`../../img/icon/${this.state.NavElements.navData.Navigation.item1.navIcon}`)} />
          <p className='navTitle'>{this.state.NavElements.navData.Navigation.item1.title}</p>
        </div>
      </div>
    )
  }
}

export default NavElements
 */


const NavElements = ({detailsNav}) => {
  return (
  <div className='nav__elements'>
    <div className="nav__element">
      <img className='navIcon'  src={require(`../../img/icon/${detailsNav.navIcon}`)} />
      <p className='navTitle'>{detailsNav.title}</p>
    </div>
  </div>
  )
}

export default NavElements