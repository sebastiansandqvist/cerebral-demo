import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/actionCreators';

function mapStateToProps(state) {
  return { items: state.filteredItems };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const ProductList = ({ items, addToCart }) => (
  <ul>
    {
      items.map((item) => (
        <li key={item.id}>
          <div><strong>Title:</strong> {item.name}</div>
          <div><strong>Price:</strong> ${item.price}</div>
          <button onClick={() => addToCart(item)}>Add to cart</button>
          <hr />
        </li>
      ))
    }
  </ul>
);

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
