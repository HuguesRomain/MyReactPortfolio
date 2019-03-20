import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppLogBook from './AppLogBook'
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import NotFound from './components/NotFound/NotFound'; 
import AppContact from './AppContact';
import Navigation from './components/Nav/Nav';
import Footer from './components/Footer';

const Root = () => (
  <Fragment>
  <Router>
  <Navigation/>
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/logbook' component={AppLogBook} />
      <Route path='/contact' component={AppContact} />
      <Route component={NotFound} />
    </Switch>
    <Footer/>
  </Router>
  </Fragment>
)


ReactDOM.render(<Root />, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
