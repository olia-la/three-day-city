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
              <Card.Header><Form.Input defaultValue={this.props.name} /></Card.Header>
               <Card.Description><TextArea defaultValue={this.props.description} /></Card.Description>
               <Card.Content extra>
                 <Icon name='marker' />
                 12 places to visit
               </Card.Content>
            <Card.Content>
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
       <Card.Content header={this.props.name} />
        <Card.Content description={this.props.description} />
       <Card.Content extra>
         <Icon name='marker' />
         12 places to visit
       </Card.Content>
        <Card.Content>
          <div className='ui two buttons'>
            <Button basic color='grey' onClick={this.handleOnClick}>Edit</Button>
          </div>
        </Card.Content>
      </Card>
    )
  }
};

export default City;
