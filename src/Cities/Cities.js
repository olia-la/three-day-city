import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import City from './City';

class Cities extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cities: [
        {id: 1, name: 'Berlin', description: 'placeholder'},
        {id: 2, name: 'Paris', description: 'placeholder'}
      ]
    }
    this.handleOnClick = this.handleOnClick.bind(this);
    this.removeCity = this.removeCity.bind(this);
  }

handleOnClick(e) {
  const cities = this.state.cities;
  let max = 0;
  cities.forEach(city => max = city.id > max ? city.id : max);
  cities.unshift({id: max + 1, editOn: true});
  this.setState({cities: cities});
}

removeCity(key) {
  let cities = this.state.cities;
  cities = cities.filter((city) => city.id !== key);
  this.setState({cities: cities});
}

  render() {
    return (
      <div>
        <Button basic icon='add circle' onClick={this.handleOnClick} />
        {this.state.cities.map((city) => <City name={city.name} description={city.description} 
        removeCity={this.removeCity} editOn={city.editOn} key={city.id} id={city.id}/>)}   
      </div>
    )
  }
}

export default Cities;
