import React, { Component } from 'react'
import SkillsCards from '../../components/Skills/SkillsCards'
import skillsData from '../../data/skillsData'

class Skills extends Component {
  state = {
    SkillsDataState: {skillsData}
  }
  render () {
   const skillCards = Object.keys(this.state.SkillsDataState.skillsData.mySkills).map(key => <SkillsCards key={key} detailsSkills={this.state.SkillsDataState.skillsData.mySkills[key]}></SkillsCards>)
    return (
      <div className="Skills">
        { skillCards }
      </div>
    )
  }
}

export default Skills

