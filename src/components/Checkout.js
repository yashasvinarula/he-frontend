import React from 'react';
import {connect} from 'react-redux';
import {Segment, Header, Grid, Button} from 'semantic-ui-react';
import {resetCart} from '../actions';
class Checkout extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    const {itemCount, totalPrice, typeDiscount, discount, finalPrice} = this.props;    
    return(
      <>
        <Segment attached>
          {
            itemCount===0 && <Button fluid color="blue" onClick = {this.props.resetCart}> RELOAD CART </Button>
          }
          <Header as="h4">Total</Header>
          <Grid>
            <Grid.Row>
              <Grid.Column width={9}>Items({itemCount})</Grid.Column>
              <Grid.Column width={1}>:</Grid.Column>
              <Grid.Column width={4}>${totalPrice}</Grid.Column>
            </Grid.Row>
            <br />
            <br />
            <Grid.Row>
              <Grid.Column width={9}>Discount</Grid.Column>
              <Grid.Column width={1}>:</Grid.Column>
              <Grid.Column width={4}>-${discount}</Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={9}>Type Discount</Grid.Column>
              <Grid.Column width={1}>:</Grid.Column>
              <Grid.Column width={4}>-${typeDiscount}</Grid.Column>
            </Grid.Row>
          </Grid>
          <br />
        </Segment>
        <Segment attached='bottom' style={{background: "#eee"}}>
          <Grid>
            <Grid.Column width={9}>
              <Header as="h4">Total</Header>
            </Grid.Column>
            <Grid.Column width={7} className="centered">
              <Header as="h4">
                ${finalPrice}
              </Header>
            </Grid.Column>
          </Grid>
        </Segment>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    itemCount: state.itemCount,
    totalPrice: state.totalPrice,
    discount: state.discount,
    typeDiscount: state.typeDiscount,
    finalPrice: state.finalPrice
  }
}




export default connect(mapStateToProps, {resetCart})(Checkout);