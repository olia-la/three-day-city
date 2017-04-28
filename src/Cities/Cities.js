import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import City from './City';

class Cities extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cities: [
        {id: 1, name: 'Berlin', description: 'placeholder'},
        {id: 2, name: 'Paris', description: 'test'}
      ]
    }
  }
  render() {
    return (
      <div>
        <Button basic icon='add circle' onClick={this.handleOnClick} />
        {this.state.cities.map((city) => <City name={city.name} description={city.description} key={city.id}/>)}
        
      </div>
    )
  }
}

export default Cities;
