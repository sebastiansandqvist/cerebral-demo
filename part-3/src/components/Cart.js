import { connect } from 'cerebral/react';
import { signal, state } from 'cerebral/tags';
import totalPrice from '../computed/totalPrice';

const Cart = ({ items, removeFromCart, total }) => (
  <div>
    <h1>Cart:</h1>
    <ul>
      {
        items.map((item, index) => (
          <li key={item.id}>
            <div><strong>Title:</strong> {item.name}</div>
            <div><strong>Price:</strong> ${item.price}</div>
            <button onClick={() => removeFromCart({ item, index })}>Remove</button>
            <hr />
          </li>
        ))
      }
    </ul>
    <p><strong>Total: </strong>${total}</p>
  </div>
);

export default connect({
  items: state`cart`,
  removeFromCart: signal`removedFromCart`,
  total: totalPrice
}, Cart);
