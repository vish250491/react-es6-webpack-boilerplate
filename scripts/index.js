import React from 'react';
import { Router, Route, Link ,browserHistory} from 'react-router'
import {render} from 'react-dom';
import App from './App';
import AboutUs from './AboutUs';
import User from './User';


render((
<Router history={browserHistory}>
  <Route path="/" component={App}></Route>
  <Route path="/AboutUs" component={AboutUs}></Route>
  <Route path="users" component={User}>
  <Route path="/user/:userId" component={User}/>
</Route>
</Router>
), document.getElementById('root'))

