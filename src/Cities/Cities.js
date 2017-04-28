import React, { Component } from 'react';
import City from './City';

class Cities extends Component {
  render() {
    return (
      <div>
      <City name='Berlin' description='Berlin is the capital of Germany.' />
      <City name='Paris' description='Paris has some of the most beautiful museums in the world.' />
      <City name='Rome' description='Rome is the capital of Italy and it is full of traffic.' />
      <City name='Amsterdam' description='Amsterdam has canals and marijuana 😂.' />
      </div>
    )
  }
}

export default Cities;
