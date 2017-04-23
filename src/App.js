import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';
import { Menu } from 'semantic-ui-react';

import './App.css';

import Home from './home/home';
import CitiesPage from './Cities/CitiesPage';
import NotFound from './NotFound'

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Menu pointing secondary>
            <NavLink exact to='/' className='item' activeClassName='active'>Home</NavLink>
            <NavLink to='/cities' className='item' activeClassName='active'>Cities</NavLink>

          </Menu>
          <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/cities' component={CitiesPage}/>
          <Route component={NotFound}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
