import { compute } from 'cerebral';
import { state } from 'cerebral/tags';

function hasId(arr, id) {
  return arr.reduce((idFound, nextItem) => (idFound || nextItem.id === id), false);
}

function alphabetically(a, b) {
  if (a.name < b.name) { return -1 };
  if (a.name > b.name) { return 1 };
  return 0;
}

export default compute(
  state`query`,
  state`products`,
  state`cart`,
  function(query, products, cart) {
    const includesQuery = (item) => item.name.toLowerCase().includes(query.toLowerCase());
    const notInCart = (item) => !hasId(cart, item.id);
    return products
      .filter(includesQuery)
      .filter(notInCart)
      .sort(alphabetically);
  }
);
