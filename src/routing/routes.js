import React from 'react';
import {Route, Router, hashHistory} from 'react-router';
import app from '../containers/app/app';
import cities from '../containers/cities/cities';


const Routes = () =>
  (<Router history={hashHistory}>
    <Route path='/' component={app}/>
    <Route path='cities' component={cities}/>
  </Router>);

export default Routes;
