import React, { Component } from 'react'
import ProfileData from '../../../data/profileData'


export default class Profile extends Component {
  state = {
    profile: {ProfileData}, 
  }

  render () {
    return (
      <div className='profile'>
        <div className='pic'>
          <img className='PicProfile'  alt='ME' src={require(`../../../img/${this.state.profile.ProfileData.me.picture}`)} />
        </div>
        <div className='content__profile'>
        <div className='name'>
          {this.state.profile.ProfileData.me.name}
        </div>
        <div className='email'>
        <a href="mailto:huguesromainpro@gmail.com">{this.state.profile.ProfileData.me.email}</a>
        </div>
        <div className="icon__contact">
        <a href="https://github.com/HuguesRomain" rel="noopener noreferrer" target="_blank"><img className='icon icon__contact--element' alt='GitHub' src={require(`../../../img/icon/github.svg`)}/></a>
        <a href="https://linkedin.com/in/hugues-romain-84245b165/" rel="noopener noreferrer" target="_blank"><img className='icon icon__contact--element' alt='Linkedin' src={require(`../../../img/icon/linkedin.svg`)}/></a>
        </div>
        <div className='description'>
          {this.state.profile.ProfileData.me.descitpion}
        </div>
        </div>
      </div>
    )
  }
};

