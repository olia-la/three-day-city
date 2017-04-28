import React, { Component } from 'react';
import City from './City';

class Cities extends Component {
  render() {
    return (
      <div>
      <City name='Berlin' description='Berlin is the capital of Germany. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treat' />
      <City name='Paris' description='Paris has some of the most beautiful museums in the world.' />
      <City name='Rome' description='Rome is the capital of Italy and it is full of traffic.' />
      <City name='Amsterdam' description='Amsterdam has canals and marijuana 😂.' />
      </div>
    )
  }
}

export default Cities;
