import React, { Component } from 'react';
import { Card, Icon, Form, Button, TextArea } from 'semantic-ui-react';

class City extends Component {

  constructor (props) {
    super(props);
    this.state = {
      editOn: false
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(e) {
    e.preventDefault();
    this.setState({editOn: !this.state.editOn});
  }

  render() {
    if (this.state.editOn) {
      return (
        <Form>
          <Card>
            <Card.Content>
              <Card.Header><Form.Input label='City' placeholder='Enter city name' /></Card.Header>
               <Card.Description><TextArea placeholder='Add description' /></Card.Description>
               <Card.Content>
                 <Icon name='marker' />
                 12 places to visit
               </Card.Content>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='grey'>Save</Button>
                <Button basic color='grey' onClick={this.handleOnClick}>Cancel</Button>
              </div>
           </Card.Content>
          </Card>
        </Form>
      )
    }

    return (
      <Card>
        <Card.Content>
          <Card.Header>{this.props.name}</Card.Header>
           <Card.Description>{this.props.description}</Card.Description>
           <Card.Content>
             <Icon name='marker' />
             12 places to visit
           </Card.Content>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='grey' onClick={this.handleOnClick}>Edit</Button>
          </div>
       </Card.Content>
      </Card>
    )
  }
};

export default City;
