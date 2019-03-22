import React, { Component } from 'react';
import './App.scss';
import LogBook from './components/LogBookPage/LogBook';

class AppLogBook extends Component {
  render() {
    return (
      <div className="App">
        <header className="header__logbook">

        </header>
           <LogBook/>
        </div>
      
    );
  }
}

export default AppLogBook;
