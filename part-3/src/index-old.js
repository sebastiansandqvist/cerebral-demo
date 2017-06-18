import React, { Component } from 'react';
import { render } from 'react-dom';
import { Controller } from 'cerebral';
import { Container, connect } from 'cerebral/react';
import { props, signal, state } from 'cerebral/tags';
import { set } from 'cerebral/operators';
import HttpProvider from '@cerebral/http';
import { httpGet } from '@cerebral/http/operators';
import Devtools from 'cerebral/devtools';

function wait(ms) {
  const waitFn = () => new Promise((resolve) => setTimeout(resolve, ms));
  waitFn.displayName = 'Wait (' + ms + 'ms)';
  return waitFn;
}

function showLoadingIndicator({ state }) {
  state.set('isLoading', true);
}

function hideLoadingIndicator({ state }) {
  state.set('isLoading', false);
}

function setPageAndTitle({ state, props }) {
  state.set('page', props.page);
  state.set('title', props.title);
}

function setErrorMessage(message) {
  return function ({ state }) {
    state.set('errorMessage', message);
  }
}

function setProducts(productList) {
  console.log(productList);
  return function({ state }) {
    // state.set('products', productList);
  }
}

function log(context) {
  console.log(context);
}

const controller = Controller({
  state: {
    isLoading: false,
    title: 'Book',
    page: 'books',
    errorMessage: '',
    products: [],
  },
  signals: {
    pageChanged: [
      setProducts([]),
      setErrorMessage(''),
      wait(200),
      setPageAndTitle,
      showLoadingIndicator,
      httpGet('/books.json'), {
        success: [
          set(state`products`, props`result`)
          // set('products', props`result`)
          // setProducts(props`result`)
        ],
        error: [setErrorMessage('Could not load products')],
        // 404: [setErrorMessage('Products not found')],
        // 500: [setErrorMessage('The server encountered an error')],
        // abort: [],
      },
      hideLoadingIndicator
    ]
  },
  providers: [
    HttpProvider({
      baseUrl: 'https://mithril-examples.firebaseio.com'
    })
  ],
  devtools: Devtools({
    host: 'localhost:8000'
  })
});

// Title -------------------

const TitleView = ({ isLoading, title }) => (
  <h1>{isLoading ? 'Loading...' : `${title} Store`}</h1>
);

const Title = connect({
  isLoading: state`isLoading`,
  title: state`title`
}, TitleView);


// Nav -------------------

const Nav = connect({
  setPage: signal`pageChanged`
}, function NavView({ setPage }) {
  return (
    <nav>
      <button onClick={() => setPage({ page: 'books', title: 'Book' })}>View books</button>
      <button onClick={() => setPage({ page: 'movies', title: 'Movie' })}>View movies</button>
      <button onClick={() => setPage({ page: 'all', title: 'Everything' })}>View all</button>
    </nav>
  );
});


// Search -------------------

// const Search = connect({
//   query: state`
// })


class AppView extends Component {
  componentWillMount() {
    this.props.setPage({ page: 'books', title: 'Book' });
  }

  render() {
    return (
      <div>
        <Title />
        <Nav />
      </div>
    );
  }
}


const App = connect({
  setPage: signal`pageChanged`
}, AppView);



render((
  <Container controller={controller}>
    <App />
  </Container>
), document.getElementById('app'));