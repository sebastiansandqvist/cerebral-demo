import { compute } from 'cerebral';
import { state } from 'cerebral/tags';


export default compute(
  state`cart`,
  function(cart) {
    return cart.reduce((runningTotal, item) => runningTotal + item.price, 0);
  }
);
