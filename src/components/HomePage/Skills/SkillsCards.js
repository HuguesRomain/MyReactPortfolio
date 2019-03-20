import React, { Component } from 'react'

const SkillsCards = ({ detailsSkills }) => {
  return (
    <div className='skill__card'>
      <div className="skill__title">
        {detailsSkills.title}
      </div>
      <img className='skill__pic'  src={require(`../../../img/skills/${detailsSkills.mySkillsPic}`)} />
      <div className="skill__description">
          {detailsSkills.description}
      </div>
    </div>
  )
}

export default SkillsCards   