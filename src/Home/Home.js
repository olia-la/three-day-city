import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    
    return (
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column floated='right' width={16}>
              <Link to='/cities' className='ui basic button big' >My cities</Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Home;
