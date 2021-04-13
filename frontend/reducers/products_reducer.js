import { RECEIVE_PRODUCTS, RECEIVE_PRODUCT } from '../actions/product_actions'

const productReducers = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type){
    case RECEIVE_PRODUCTS:
      return action.products;
    case RECEIVE_PRODUCT:
      newState[action.product.id] = action.product;
      console.log(newState);
      return newState;
    default: return state;
  }
}

export default productReducers;