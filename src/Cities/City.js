import React, { Component } from 'react';
import { Card, Icon, Form, Button, TextArea } from 'semantic-ui-react';

class City extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editOn: props.editOn,
      previousName: props.name,
      name: props.name,
      previousDescription: props.description,
      description: props.description
    };
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
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
      previousName: this.state.name,
      previousDescription: this.state.description
    });
  }

  handleCancel(e) {
    e.preventDefault();
    this.setState({
      editOn: !this.state.editOn,
      name: this.state.previousName,
      description: this.state.previousDescription
    });
  }

  handleDescriptionChange(e) {
    this.setState({description: e.target.value});
  }



  render() {
    if (this.state.editOn) {
      return (
        <Form onSubmit={this.handleSubmit}>
          <Card>
              <Card.Header><Form.Input value={this.state.name} onChange={this.handleNameChange} /></Card.Header>
               <Card.Description><TextArea value={this.state.description} onChange={this.handleDescriptionChange} /></Card.Description>
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
        <Card.Content description={this.state.description} />
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
