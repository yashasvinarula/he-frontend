import React from 'react'
import {connect} from 'react-redux';
import { Message } from 'semantic-ui-react';
import {toggleNotification} from '../actions/';

class Notification extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      notificationVisible: true
    }
  }

  componentDidMount(){
    this.setState({
      notificationVisible: this.props.notificationVisible
    })
  }

  componentDidUpdate(prevProps){
    if(prevProps.notificationVisible !== this.props.notificationVisible){
      this.setState({notificationVisible: this.props.notificationVisible});
      if(this.props.notificationVisible === true){
        window.setTimeout(() => this.props.toggleNotification(false), 2000);
      }
    }
  }

  render() {
    const {notificationVisible} = this.state;
    return (
      <>
      {
        notificationVisible && (
          <Message
            header='Item Deleted!'
            className="notification"
          />
        )
      }
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    notificationVisible: state.notificationVisible
  }
}

export default connect(mapStateToProps, {toggleNotification})(Notification);