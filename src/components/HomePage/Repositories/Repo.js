import React, { Component } from 'react'
import RepoCards from './RepoCards'

class Repo extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }
  componentDidMount() {
    fetch(`https://api.github.com/users/HuguesRomain/repos?access_token=67c3c018a9519425d52b7ddccafb382cb20f2f77`)
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