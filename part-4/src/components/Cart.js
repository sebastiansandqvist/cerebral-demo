import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/actionCreators';

function mapStateToProps(state) {
  return {
    items: state.cart,
    total: state.total
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const Cart = ({ items, removeFromCart, total }) => (
  <div>
    <h1>Cart:</h1>
    <ul>
      {
        items.map((item, index) => (
          <li key={item.id}>
            <div><strong>Title:</strong> {item.name}</div>
            <div><strong>Price:</strong> ${item.price}</div>
            <button onClick={() => removeFromCart(item)}>Remove</button>
            <hr />
          </li>
        ))
      }
    </ul>
    <p><strong>Total: </strong>${total}</p>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
