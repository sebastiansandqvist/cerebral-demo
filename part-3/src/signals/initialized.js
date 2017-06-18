import { set } from 'cerebral/operators';
import { state } from 'cerebral/tags';
import loadProducts from '../chains/loadProducts';

export default [
  set(state`page`, 'books'),
  loadProducts
];
