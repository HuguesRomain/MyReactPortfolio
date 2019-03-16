import React, { Component } from 'react'
import skillsData from '../../data/skillsData'


/* class SkillsCards extends Component {

  state = {
    skills: {skillsData}
  }

  render () {
    return (
      <div className='skill__card'>
        <div className='skill__title'>
          {details.title}
        </div>
        <img className='skill__pic'  src={require(`../../img/skills/${this.state.skills.skillsData.mySkills.skill1.mySkillsPic}`)} />
        <div className="skill__description">
          {this.state.skills.skillsData.mySkills.skill1.description}
        </div>
      </div>
    )
  }
}

export default SkillsCards
 */

const SkillsCards = ({ details }) => {
  return (
    <div className='skill__card'>
      <div className="skill__title">
        {details.title}
      </div>
    </div>
  )
}

export default SkillsCards