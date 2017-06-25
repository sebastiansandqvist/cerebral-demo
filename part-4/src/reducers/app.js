function alphabetically(a, b) {
  if (a.name < b.name) { return -1 };
  if (a.name > b.name) { return 1 };
  return 0;
}

function sum(arr) {
  return arr.reduce((total, next) => total + next.price, 0);
}

function indexOfId(arr, id) {
  return arr.findIndex((item) => item.id === id);
}

function includes(str1, str2) {
  return str1.toLowerCase().includes(str2.toLowerCase());
}

function productFilter(items, cart, query) {
  return items.filter(
    (item) => includes(item.name, query) && indexOfId(cart, item.id) === -1
  );
}

const defaultState = {
  cart: [],
  filteredItems: [],
  items: [],
  isLoading: true,
  page: 'books',
  query: '',
  total: 0
};

function appReducer(state = defaultState, action) {
  console.log(state, action);
  switch (action.type) {
    case 'LOADED_ITEMS': {
      return Object.assign({}, state, {
        items: action.items,
        filteredItems: action.items.sort(alphabetically),
        isLoading: false
      });
    }
    case 'SET_LOADING': {
      return Object.assign({}, state, {
        isLoading: action.value
      });
    }
    case 'SET_PAGE': {
      return Object.assign({}, state, {
        page: action.value
      });
    }
    case 'SET_QUERY': {
      const query = action.value;
      const filteredItems = productFilter(state.items, state.cart, query).sort(alphabetically);
      return Object.assign({}, state, {
        query,
        filteredItems
      });
    }
    case 'ADD_TO_CART': {
      const item = action.item;
      const itemIndex = indexOfId(state.filteredItems, item.id);
      const cart = state.cart.concat(item);
      return Object.assign({}, state, {
        cart,
        filteredItems: [
          ...state.filteredItems.slice(0, itemIndex),
          ...state.filteredItems.slice(itemIndex + 1, state.filteredItems.length)
        ].sort(alphabetically),
        total: sum(cart)
      });
    }
    case 'REMOVE_FROM_CART': {
      const item = action.item;
      const itemIndex = indexOfId(state.cart, item.id);
      const cart = [
        ...state.cart.slice(0, itemIndex),
        ...state.cart.slice(itemIndex + 1, state.cart.length)
      ];
      const filteredItems = item.name.toLowerCase().includes(state.query.toLowerCase()) && indexOfId(state.items, item.id) !== -1 ?
        state.filteredItems.concat(item).sort(alphabetically) : state.filteredItems;
      return Object.assign({}, state, {
        cart,
        filteredItems,
        total: sum(cart)
      });
    }
    default: return state;
  }
}

export default appReducer;
