import React, { Component } from 'react';
import './App.scss';


class AppContact extends Component {
 
  render() {
    return (
      <div className="App">
        <div className="page">
          <div className="intro__contact">
           <p>want to tell me something ?</p>
            <p>An advice ? A project ? contact me !</p>
          </div>
        <div className='content'>
        <form className='contact__form'>
          <div className="form__elements">
           <input 
           className='input__name' 
           placeholder='Your name' 
           type="text" name="name" 
           id=""/>
           <input 
           className='input__email' 
           placeholder='Your e-mail' 
           type="email" name="email" 
           id=""/>
           <textarea 
           className='input__message' 
           placeholder='Message' 
           type="text" 
           name="message" 
           id=""/>
          </div>
          <button 
          className='button__send'
          type='submit'>Send !</button>
        </form>
        </div>
      </div>
    </div>
    );
  }
}

export default AppContact;
