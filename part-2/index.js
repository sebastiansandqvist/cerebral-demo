import React, { Component } from 'react';
import { render } from 'react-dom';

// -------------------------------------
// 1. Stateless functional component
// -------------------------------------


// const App = () => (
//   <div>Hello</div>
// );


// -------------------------------------
// 2. Class component
// -------------------------------------

// class App extends Component {
//   render() {
//     return (
//       <div>Hello!</div>
//     );
//   }
// }


// -------------------------------------
// 3. Lifecycle methods & state
// -------------------------------------

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       books: [],
//       isLoading: true
//     }
//   }

//   /*
//   [
//     { id: 0, name: "The Iliad", price: 12 },
//     { id: 1, name: "The Republic", price: 10 },
//     { id: 2, name: "Beowulf", price: 5 },
//     { id: 3, name: "The Art of War", price: 9 }
//   ]
//   */
//   componentWillMount() {
//     fetch('https://mithril-examples.firebaseio.com/books.json')
//       .then((response) => response.json())
//       .then((booksJson) => this.setState({
//         books: booksJson,
//         isLoading: false
//       }));
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.isLoading ? 'Loading...' : 'Book Store'}</h1>
//         <ul>
//           { this.state.books.map((book) => <li key={book.id}>{book.name}</li>)}
//         </ul>
//       </div>
//     );
//   }
// }



// -------------------------------------
// 4. Complex application
// -------------------------------------

function alphabetically(a, b) {
  if (a.name < b.name) { return -1 };
  if (a.name > b.name) { return 1 };
  return 0;
}

const ProductList = ({ items, addToCart }) => (
  <ul>
    {
      items.sort(alphabetically).map((item) => (
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


const Cart = ({ items, removeFromCart }) => {
  const total = items.reduce((runningTotal, item) => runningTotal + item.price, 0);
  return (
    <div>
      <h1>Cart:</h1>
      <ul>
        {
          items.map((item) => (
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
};

const Nav = ({ setPage }) => (
  <nav>
    <button onClick={() => setPage('books')}>View books</button>
    <button onClick={() => setPage('movies')}>View movies</button>
    <button onClick={() => setPage('all')}>View all</button>
  </nav>
);

const Title = ({ isLoading, title }) => (
  <h1>{isLoading ? 'Loading...' : title}</h1>
);

const SearchInput = ({ query, performSearch }) => (
  <input
    type='text'
    value={query}
    onInput={performSearch}
    placeholder='Search'
  />
);

function hasId(arr, id) {
  return arr.reduce((idFound, nextItem) => (idFound || nextItem.id === id), false);
}

const pageMap = {
  books: 'Book Store',
  movies: 'Movie Store',
  all: 'Everything Store'
};

class App extends Component {

  constructor() {
    super();
    this.state = {
      title: 'Book Store',
      items: [],
      filteredItems: [],
      isLoading: true,
      query: '',
      cart: [],
    }
    this.setPage = this.setPage.bind(this);
    this.performSearch = this.performSearch.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.productFilter = this.productFilter.bind(this);
  }

  productFilter(item) {
    const itemName = item.name.toLowerCase();
    const query = this.state.query.toLowerCase();
    return (
      itemName.includes(query) &&
      !hasId(this.state.cart, item.id)
    );
  }

  setPage(page) {
    this.setState({ title: pageMap[page], isLoading: true, items: [], filteredItems: [] });
    if (page !== 'all') {
      this.fetchItems(page)
        .then((items) => this.setState({
          items: items,
          filteredItems: items.filter(this.productFilter),
          isLoading: false
        })
      );
    }
    else {
      Promise.all([this.fetchItems('books'), this.fetchItems('movies')])
        .then(([books, movies]) => [...books, ...movies])
        .then((items) => this.setState({
          items: items,
          filteredItems: items.filter(this.productFilter),
          isLoading: false
        }));
    }
  }

  fetchItems(type) {
    return fetch(`https://mithril-examples.firebaseio.com/${type}.json`).then((response) => response.json());
  }

  /*
  [
    { id: 0, name: "The Iliad", price: 12 },
    { id: 1, name: "The Republic", price: 10 },
    { id: 2, name: "Beowulf", price: 5 },
    { id: 3, name: "The Art of War", price: 9 }
  ]
  */
  componentWillMount() {
    this.fetchItems('books').then((json) => this.setState({
      items: json,
      filteredItems: json,
      isLoading: false
    }));
  }

  performSearch(event) {
    const query = event.target.value;
    // cannot use `this.productFilter` here because `this.state.query` has not yet been set through `this.setState`!
    const filteredItems = this.state.items.filter(
      (item) => item.name.toLowerCase().includes(query.toLowerCase()) && !hasId(this.state.cart, item.id)
    );
    this.setState({ query, filteredItems });
  }

  addToCart(item) {
    const itemIndex = this.state.filteredItems.indexOf(item);
    this.setState({
      cart: this.state.cart.concat(item),
      filteredItems: [
        ...this.state.filteredItems.slice(0, itemIndex),
        ...this.state.filteredItems.slice(itemIndex + 1, this.state.filteredItems.length)
      ]
    })
  }

  removeFromCart(item) {
    const itemIndex = this.state.cart.indexOf(item);
    this.setState({
      filteredItems: item.name.toLowerCase().includes(this.state.query.toLowerCase()) && hasId(this.state.items, item.id) ?
        this.state.filteredItems.concat(item) : this.state.filteredItems,
      cart: [
        ...this.state.cart.slice(0, itemIndex),
        ...this.state.cart.slice(itemIndex + 1, this.state.cart.length)
      ]
    })
  }

  render() {
    return (
      <div>
        <Title isLoading={this.state.isLoading} title={this.state.title} />
        <Nav setPage={this.setPage}/>
        <SearchInput query={this.state.query} performSearch={this.performSearch} />
        <ProductList items={this.state.filteredItems} addToCart={this.addToCart} />
        <Cart items={this.state.cart} removeFromCart={this.removeFromCart} />
      </div>
    );
  }

}


render(<App />, document.getElementById('app'));

