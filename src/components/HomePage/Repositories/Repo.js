import React, { Component } from 'react'
import RepoCards from './RepoCards'

class Repo extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }
  componentDidMount() {
    fetch(`https://api.github.com/users/HuguesRomain/repos?access_token=03abad12cf96b6ef86b56a52e6b5260e1c1b0776`)
      .then(res => res.json())
      .then(json => this.setState({ data: json }));
  }
  render () {
    const repoCards = Object.keys(this.state.data).slice(0, 5).map(key => <RepoCards key={key} detailsRepo={this.state.data[key]}></RepoCards>)
    return (
      <div className='repositories'>
        {repoCards}
      </div>
    )
  }
}

export default Repo