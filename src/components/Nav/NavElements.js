import React, { Component } from 'react'
import navData from '../../data/navData'
import {Link} from 'react-router-dom'

class NavElements extends Component {
  state = {
    NavElements: {navData},
  }

  render () {
    return (
      <div className='nav__elements'>
        <div className="curseur"></div>
      <Link to={"/"}><div className="nav__element">
          <img className='navIcon' alt='HomeIcon' src={require(`../../img/icon/${this.state.NavElements.navData.Navigation.item1.navIcon}`)} />
          <p className='navTitle'>{this.state.NavElements.navData.Navigation.item1.title}</p>
        </div></Link> 
       
        <Link to={"/contact"}><div className="nav__element nav__element--second">
          <img className='navIcon' alt='ContactIcon' src={require(`../../img/icon/${this.state.NavElements.navData.Navigation.item3.navIcon}`)} />
          <p className='navTitle'>{this.state.NavElements.navData.Navigation.item3.title}</p>
        </div></Link>
      </div>
    )
  }
}

export default NavElements



