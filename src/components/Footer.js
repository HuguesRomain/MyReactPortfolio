import React, { Component } from 'react'

class Footer extends Component {
  render () {
    return (
      <footer>
       <ul>
        <li className='cool__sentence'>Made with <img className='react--element' alt='React' src={require(`../img/skills/react.png`)}/> and <span className='hearth' role='img' aria-label="EmojiHearth">❤️</span> in Paris 👨‍🎨</li>
        <li>© Copyright Hugues Romain 2019</li>
        <li className='icon__contactfooter'>
        <div className='icon__contactfooter--element1'><a href="mailto:huguesromainpro@gmail.com"> <img className='icon__contactfooter--element' alt='email' src={require(`../img/icon/mail.svg`)}/></a></div>
        <div className='icon__contactfooter--element2'><a href="https://linkedin.com/in/hugues-romain-84245b165/" rel="noopener noreferrer" target="_blank"><img className=' icon__contactfooter--element' alt='linkedin' src={require(`../img/icon/linkedin.svg`)}/></a></div>
        <div className='icon__contactfooter--element3'><a href="https://github.com/HuguesRomain" rel="noopener noreferrer" target="_blank"> <img className='icon__contactfooter--element' alt='github' src={require(`../img/icon/github.svg`)}/></a></div>
        </li>
      </ul>
      </footer>
    )
  }
}

export default Footer

