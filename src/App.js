import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import {Container, Grid, Icon} from 'semantic-ui-react';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Notification from './components/Notification';

class App extends React.Component{
  render(){
    return(
      <>
        <Notification />
        <div style={{width: '100vw', height: '50px', background: '#eee', marginBottom: "30px"}}></div>
        <Container>
          <p style={{fontSize: "30px", color: "#2F4F4F", marginBottom: "0"}}>
            <span style={{fontSize: "20px", margin: "0px 10px"}}><Icon fitted name="chevron left"/></span>
            Order Summary
          </p>
          <br />
          <Grid>
            <Grid.Row only="computer large screen">
              <Grid.Column width={12}>
                <Cart />
              </Grid.Column>
              <Grid.Column width={4}>
                <Checkout />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row only="tablet mobile">
              <Grid.Column width={16}>
                <Checkout />
              </Grid.Column>
              <Grid.Column width={16}>
                <Cart />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);