import React, { Component } from 'react'
import RepoCards from './RepoCards'

class Repo extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }
  componentDidMount() {
    fetch(`https://api.github.com/users/HuguesRomain/repos?access_token=8f5b0b9876137837b39ae7b912261d664179da5c`)
      .then(res => res.json())
      .then(json => this.setState({ data: json }));
  }
  render () {
    const repoCards = Object.keys(this.state.data).slice(0, 8).map(key => <RepoCards key={key} detailsRepo={this.state.data[key]}></RepoCards>)
    return (
      <div className='repositories'>
        {repoCards}
      </div>
    )
  }
}

export default Repo