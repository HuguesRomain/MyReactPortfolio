import React, { Component } from 'react'
import skillsData from '../../data/skillsData'

const SkillsCards = ({ details }) => {
  return (
    <div className='skill__card'>
      <div className="skill__title">
        {details.title}
      </div>
      <img className='skill__pic'  src={require(`../../img/skills/${details.mySkillsPic}`)} />
      <div className="skill__description">
          {details.description}
      </div>
    </div>
  )
}

export default SkillsCards   