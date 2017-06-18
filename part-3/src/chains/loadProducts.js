import { parallel } from 'cerebral';
import { equals, set } from 'cerebral/operators';
import { httpGet } from '@cerebral/http/operators';
import { props, state, string } from 'cerebral/tags';

// function wait(ms) {
//   const waitFn = () => new Promise((resolve) => setTimeout(resolve, ms));
//   waitFn.displayName = 'Wait (' + ms + 'ms)';
//   return waitFn;
// }

function concat(key, value) {
  return function({ props }) {
    return {
      [key]: props[key].concat(props[value])
    }
  }
}

function fetchProducts(url) {
  return [
    httpGet(url), {
      success: [ concat('products', 'result') ],
      error: [ set(state`errorMessage`, 'Could not load products') ],
      // 401: [ set(state`errorMessage`, 'Not authorized') ],
      // 404: [ set(state`errorMessage`, 'Products not found') ],
      // 500: [ set(state`errorMessage`, 'The server encountered an error') ],
      // abort: [],
    }
  ];
}


export default [
  set(state`isLoading`, true),
  set(state`products`, []),
  set(props`products`, []),
  // wait(200),
  equals(state`page`), {
    all: parallel([
      fetchProducts('/books.json'),
      fetchProducts('/movies.json'),
    ]),
    books: [ fetchProducts('/books.json'), ],
    movies: [ fetchProducts('/movies.json') ],
    otherwise: [ set(state`errorMessage`, 'Page not found') ]
  },
  set(state`products`, props`products`),
  set(state`isLoading`, false),
];
