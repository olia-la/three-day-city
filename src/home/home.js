import React, { Component } from 'react';
import { Button, Grid } from 'semantic-ui-react'

class Home extends Component {

  render() {

    return (
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column floated='right' width={5}>
              <Button basic size='massive' floated='center'>My cities</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Home;
