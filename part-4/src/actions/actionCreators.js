export function loadedItems(products) {
  return {
    type: 'LOADED_ITEMS',
    items: products || []
  };
}

export function addToCart(item) {
  return {
    type: 'ADD_TO_CART',
    item
  };
}

export function removeFromCart(item) {
  return {
    type: 'REMOVE_FROM_CART',
    item
  };
}

export function setLoading(value) {
  return {
    type: 'SET_LOADING',
    value
  };
}

export function setQuery(value) {
  return {
    type: 'SET_QUERY',
    value
  };
}

export function setPage(value) {
  return {
    type: 'SET_PAGE',
    value
  };
}
