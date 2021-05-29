import React from 'react';
import {connect} from 'react-redux';
import {Table, Segment, Icon, Grid, Image} from 'semantic-ui-react';
import {changeItemCount, deleteItem, toggleNotification, } from '../actions';

class CartItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
    this.changeItemCount = this.changeItemCount.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  async changeItemCount(id, quantity){
    if(quantity <= 0){
      await this.props.deleteItem(id);
    }else{
      await this.props.changeItemCount(id, quantity);
    }
  }

  async deleteItem(id){
    await this.props.deleteItem(id);
  }

  render(){
    const {item} = this.props;
    return(
      <Table.Row>
        <Table.Cell>
          <Segment className="less-padded">
            <Image src={item.img_url} style={{display: "inline-block", marginRight: "10px"}}/>
            {item.name}
            <Icon 
              name="close" 
              size="large" 
              style={{cursor: "pointer", right: "10px"}} 
              className="vertically-centered"
              onClick={(id) => this.deleteItem(item.id)}  
            />
          </Segment>
        </Table.Cell>
        <Table.Cell className="centered">
          <Grid columns={3}>
            <Grid.Column>
              <Icon 
                name="minus" 
                style={{cursor: "pointer", right: "0"}} 
                className="vertically-centered"
                onClick={(id, quantity) => this.changeItemCount(item.id, item.quantity-1)}  
              />
            </Grid.Column>
            <Grid.Column><Segment className="centered">{item.quantity}</Segment></Grid.Column>
            <Grid.Column>
              <Icon 
                name="add" 
                style={{cursor: "pointer", left: "0"}} 
                className="vertically-centered"
                onClick={(id, quantity) => this.changeItemCount(item.id, item.quantity+1)}  
              />
            </Grid.Column>
          </Grid>
        </Table.Cell>
        <Table.Cell className="centered">
          ${item.price}
        </Table.Cell>
      </Table.Row>
    )
  }
}

export default connect(null, {changeItemCount, deleteItem, toggleNotification})(CartItem);