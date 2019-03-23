import React, { Component } from 'react'

const SkillsCards = ({ detailsSkills }) => {
  return (
    <li className='skill__card'>
      <div className="skill__title">
        {detailsSkills.title}
      </div>
      <img className='skill__pic' alt='skills' src={require(`../../../img/skills/${detailsSkills.mySkillsPic}`)} />
      <div className="skill__description">
          {detailsSkills.description}
      </div>
    </li>
  )
}

export default SkillsCards   