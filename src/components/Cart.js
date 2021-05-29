import React from 'react';
import {Header, Icon, Table} from 'semantic-ui-react';
import {connect} from 'react-redux';
import CartItem from './CartItem';
import {calculateBill} from '../actions';

class Cart extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      items: [],
      itemCount: 0,
    }
  }

  componentDidMount(){
    const {
      items,
      itemCount,
    } = this.props;
    this.setState({
      items,
      itemCount,
    });
  }

  componentDidUpdate(prevProps){
    if(prevProps.items !== this.props.items || prevProps.itemCount !== this.props.itemCount){
      const {
        items,
        itemCount,
      } = this.props;
      this.setState({
        items,
        itemCount,
      });
      this.props.calculateBill(this.props.items);
    }    
  }

  render(){
    const {items, itemCount} = this.state;
    return(
      <div>
        <Table style={{border: "none"}}>
          <Table.Header>
            <Table.Row style={{borderTop: "1px solid red"}}>
              <Table.HeaderCell width={9} className="bordered">Items ({itemCount})</Table.HeaderCell>
              <Table.HeaderCell width={4} className="bordered centered">Qty</Table.HeaderCell>
              <Table.HeaderCell width={3} className="bordered centered">Price</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {
              items.map(item => (
                <CartItem item={item} key={item.id} />
              ))
            }
          </Table.Body>
        </Table>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    items: state.items,
    itemCount: state.itemCount
  }
}


export default connect(mapStateToProps, {calculateBill})(Cart);