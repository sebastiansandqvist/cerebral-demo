import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from './actions/actionCreators';
import Nav from './components/Nav';
import Cart from './components/Cart';
import ProductList from './components/ProductList';
import SearchInput from './components/SearchInput';
import Title from './components/Title';


function mapStateToProps(state) {
  return {
    cart: state.cart,
    items: state.items,
    filteredItems: state.filteredItems,
    isLoading: state.isLoading,
    page: state.page,
    query: state.query,
    total: state.total
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

class App extends Component {

  componentWillMount() {
    console.log(this.props);
    this.props.setLoading(true);
    fetch('http://mithril-examples.firebaseio.com/books.json')
      .then((response) => response.json())
      .then(this.props.loadedItems);
  }

  render() {
    return (
      <div>
        <Title />
        <Nav />
        <SearchInput />
        <ProductList />
        <Cart />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

