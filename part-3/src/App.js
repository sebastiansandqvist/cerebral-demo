import React, { Component } from 'react';
import Cart from './components/Cart';
import ErrorComponent from './components/Error';
import Nav from './components/Nav';
import ProductList from './components/ProductList';
import SearchInput from './components/SearchInput';
import Title from './components/Title';

export default class App extends Component {
  componentWillMount() {
    this.props.onInit();
  }

  render() {
    return (
      <div>
        <Title />
        <Nav />
        <ErrorComponent />
        <SearchInput />
        <ProductList />
        <Cart />
      </div>
    );
  }
}
