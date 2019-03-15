import React, { Component } from 'react'

const Profile = ({details}) => {
    return (
      <div className='profile'>
        <div className='pic'>
          <img src={require(`../img/${details.picture}`)}   />
        </div>
      </div>
    )
  }

  export default Profile;