import React, { Component } from 'react';
import { Card, Icon, Form, Button, TextArea } from 'semantic-ui-react';

class City extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editOn: false,
      previousName: props.name,
      name: props.name
    };
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleOnClick(e) {
    e.preventDefault();
    this.setState({editOn: !this.state.editOn});
  }

  handleNameChange(e) {
    this.setState({name: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      editOn: !this.state.editOn,
      previousName: this.state.name
    });
  }

  handleCancel(e) {
    e.preventDefault();
    this.setState({
      name: this.state.previousName,
      editOn: !this.state.editOn
    });
  }

  render() {
    if (this.state.editOn) {
      return (
        <Form onSubmit={this.handleSubmit}>
          <Card>
              <Card.Header><Form.Input value={this.state.name} onChange={this.handleNameChange} /></Card.Header>
              //  <Card.Description><TextArea value={this.state.value} onChange={this.handleChange} /></Card.Description>
               <Card.Content extra>
                 <Icon name='marker' />
                 12 places to visit
               </Card.Content>
            <Card.Content>
              <div className='ui two buttons'>
                <Button basic color='grey'>Save</Button>
                <Button basic color='grey' onClick={this.handleCancel}>Cancel</Button>
              </div>
           </Card.Content>
          </Card>
        </Form>
      )
    }

    return (
      <Card>
       <Card.Content header={this.state.name} />
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
