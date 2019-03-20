import React, { Component } from 'react'

class Footer extends Component {
  render () {
    return (
      <footer>
       <ul>
        <li>Made with 💻 and ❤️ in Paris 👨‍🎨</li>
        <li>Copyright Hugues Romain 2019</li>
        <li className='icon__contactfooter'>
        <div><a href="https://github.com/HuguesRomain" target="_blank"> <img className='icon__contactfooter--element' src={require(`../img/icon/github.svg`)}/></a></div>
        <div><a href="https://github.com/HuguesRomain" target="_blank"> <img className='icon__contactfooter--element' src={require(`../img/icon/github.svg`)}/></a></div>
        <div><a href="https://linkedin.com/in/hugues-romain-84245b165/" target="_blank"><img className=' icon__contactfooter--element' src={require(`../img/icon/linkedin.svg`)}/></a></div>
        </li>
      </ul>
      </footer>
    )
  }
}

export default Footer

