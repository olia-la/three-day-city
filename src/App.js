import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Menu } from 'semantic-ui-react'

class App extends Component {
  render() {
    const items = [
      { key: 'editorials', active: true, name: 'Editorials' },
      { key: 'review', name: 'Reviews' },
      { key: 'events', name: 'Upcoming Events' },
    ];


    return (
      <Menu items={items} />
    );
  }
}

export default App;
