import React, { Component } from 'react';


class AppNotFound extends Component {
  render() {
    return (
      <div className="App">
        <div className="pageNotFound">
          <div className="content">
            <p className='NotFound'>There is nothing here <span role='img' aria-label="misstake"> 😰</span></p>
          </div>
      </div>
    </div>
    );
  }
}

export default AppNotFound;
