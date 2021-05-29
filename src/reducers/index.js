import data from './data';
import * as types from '../actions/types';

const initialState = {
  items: data.items,
  itemCount: data.itemCount, 
	totalPrice: data.totalPrice,
	discount: data.discount,
	typeDiscount: data.typeDiscount,
	finalPrice: data.finalPrice,
  notificationVisible: false
}

export default (state = initialState, action) => {
  switch(action.type){
    case types.CHANGE_COUNT:
      return {
        ...state,
        items: state.items.map(item => item.id === action.payload.id ? {...item, quantity: action.payload.quantity} : item)
      }
    case types.DELETE_ITEM: 
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id)
      }
    case types.SET_CHECKOUT_DETAILS: 
      return {
        ...state,
        itemCount: action.payload.itemCount,
        totalPrice: action.payload.totalPrice,
        discount: action.payload.discount,
        typeDiscount: action.payload.typeDiscount,
        finalPrice: action.payload.finalPrice,
      }
    case types.TOGGLE_NOTIFICATION:
      return {
        ...state,
        notificationVisible: action.payload.notificationVisible
      }
    case types.RESET_CART: return initialState
    default:
      return state;
  }
}

