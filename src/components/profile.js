import React, { Component } from 'react'
import ProfileData from '../data/profileData'


export default class Profile extends Component {
  state = {
    profile: {ProfileData}, 
  }

  render () {
    return (
      <div className='profile'>
        <div className='pic'>
          <img className='PicProfile'  src={require(`../img/${this.state.profile.ProfileData.me.picture}`)} />
        </div>
        <div className='content__profile'>
        <div className='name'>
          {this.state.profile.ProfileData.me.name}
        </div>
        <div className='email'>
          {this.state.profile.ProfileData.me.email}
        </div>
        <div className='description'>
          {this.state.profile.ProfileData.me.descitpion}
        </div>
        <ul>
          <li>salut</li>
        </ul>
        </div>
      </div>
    )
  }
};