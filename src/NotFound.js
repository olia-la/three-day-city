import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NotFound extends Component {
  render() {
    return (
      <div>
      <h2>Page not found! 😧</h2>
      <Link to='/' className='ui basic button big' >Home</Link>
      </div>
    )
  }
}

export default NotFound
