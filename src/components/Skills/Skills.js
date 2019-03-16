import React, { Component } from 'react'
import SkillsCards from '../../components/Skills/SkillsCards'
import skillsData from '../../data/skillsData'

class Skills extends Component {
  render () {
    const skills = Object.keys(this.state.skills.skillsData.mySkills)
    .map(key => <SkillsCards details={this.state.skills.skillsData.mySkills[key]}> </SkillsCards>)
    console.log(skills);
    return (
      <div>
        <SkillsCards />
      </div>
    )
  }
}

export default Skills