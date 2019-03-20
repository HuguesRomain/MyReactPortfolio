import React, { Component } from 'react'


class RepoCards extends Component {
  state = {
    test: {},
  }
  constructor() {
    super();
    this.state = { data: [] };
  }
  componentDidMount() {
    fetch(`https://api.github.com/users/HuguesRomain/repos?access_token=03abad12cf96b6ef86b56a52e6b5260e1c1b0776`)
      .then(res => res.json())
      .then(json => this.setState({ test: json }));
  }

  render () {
    console.log(this.state.test)
    return (
      <div className='repo__card-comingsoon'> 
        <div className="repo__title"> 
            
        </div>
      </div>
    )
  }
}

export default RepoCards