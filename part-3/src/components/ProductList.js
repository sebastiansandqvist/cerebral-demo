import { connect } from 'cerebral/react';
import { signal } from 'cerebral/tags';
import filteredProducts from '../computed/filteredProducts';

const ProductList = ({ items, addToCart }) => (
  <ul>
    {
      items.map((item) => (
        <li key={item.id}>
          <div><strong>Title:</strong> {item.name}</div>
          <div><strong>Price:</strong> ${item.price}</div>
          <button onClick={() => addToCart({ item })}>Add to cart</button>
          <hr />
        </li>
      ))
    }
  </ul>
);

export default connect({
  items: filteredProducts,
  addToCart: signal`addedToCart`,
}, ProductList);
