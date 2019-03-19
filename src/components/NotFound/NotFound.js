import React, { Component } from 'react';
import Navigation from '../Nav/Nav'


class AppNotFound extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <div className="pageNotFound">
          <p className='NotFound'>There is nothing here 😰</p>
      </div>
    </div>
    );
  }
}

export default AppNotFound;
