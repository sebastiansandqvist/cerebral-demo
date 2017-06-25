import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/actionCreators';

function mapStateToProps(state) {
  return {
    items: state.cart,
    total: state.total
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}


function fetchProducts(path) {
  return fetch(`http://mithril-examples.firebaseio.com/${path}.json`)
    .then((response) => response.json());
}

class Nav extends Component {
  constructor() {
    super();
    this.fetchItems = this.fetchItems.bind(this);
  }
  fetchItems(page) {
    this.props.setLoading(true);
    this.props.setPage(page);
    if (page === 'all') {
      Promise.all([fetchProducts('books'), fetchProducts('movies')])
        .then(([books, movies]) => [...books, ...movies])
        .then(this.props.loadedItems);
    }
    else {
      fetchProducts(page).then(this.props.loadedItems);
    }
  }
  render() {
    return (
      <nav>
        <button onClick={() => this.fetchItems('books')}>View books</button>
        <button onClick={() => this.fetchItems('movies')}>View movies</button>
        <button onClick={() => this.fetchItems('all')}>View all</button>
      </nav>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Nav);
