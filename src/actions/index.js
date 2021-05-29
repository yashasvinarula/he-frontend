import * as types from './types';
import {calculatePrices} from '../utils';
import data from '../reducers/data';

export const changeItemCount = (id, quantity) => dispatch => {
  return dispatch({
    type: types.CHANGE_COUNT,
    payload: {
      id, 
      quantity
    }
  })
}

export const deleteItem = id => dispatch => {
  dispatch({
    type: types.DELETE_ITEM,
    payload: {
      id
    }
  });
  return dispatch(toggleNotification(true));
}

export const calculateBill = items => dispatch => {
  const data = calculatePrices(items);
  dispatch({
    type: types.SET_CHECKOUT_DETAILS,
    payload: data
  })
}

export const resetCart = () => dispatch => {
  return dispatch({
    type: types.RESET_CART,
  })
}

export const toggleNotification = notificationVisible => dispatch => {
  dispatch({
    type: types.TOGGLE_NOTIFICATION,
    payload: {
      notificationVisible
    }
  })
}