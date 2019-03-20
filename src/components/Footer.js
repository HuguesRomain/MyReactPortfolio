import React, { Component } from 'react'

class Footer extends Component {
  render () {
    return (
      <footer>
       <ul>
        <li>Made with 💻 and ❤️ in Paris 👨‍🎨</li>
        <li>Copyright Hugues Romain 2019</li>
        <li className='icon__contactfooter'>
        <div className='icon__contactfooter--element1'><a mailto="huguesromainpro@gmail.com"> <img className='icon__contactfooter--element' src={require(`../img/icon/mail.svg`)}/></a></div>
        <div className='icon__contactfooter--element2'><a href="https://linkedin.com/in/hugues-romain-84245b165/" target="_blank"><img className=' icon__contactfooter--element' src={require(`../img/icon/linkedin.svg`)}/></a></div>
        <div className='icon__contactfooter--element3'><a href="https://github.com/HuguesRomain" target="_blank"> <img className='icon__contactfooter--element' src={require(`../img/icon/github.svg`)}/></a></div>
        </li>
      </ul>
      </footer>
    )
  }
}

export default Footer

