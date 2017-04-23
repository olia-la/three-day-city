import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Home from './home/home'
import { Menu } from 'semantic-ui-react'

class App extends Component {

  state = { activeItem: 'home' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item name='cities' active={activeItem === 'cities'} onClick={this.handleItemClick} />
          <Menu.Item name='contact' active={activeItem === 'contact'} onClick={this.handleItemClick} />
        </Menu>
        <Home />
      </div>
    );
  }
}

export default App;
