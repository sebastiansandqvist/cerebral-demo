import { set } from 'cerebral/operators';
import { props, state } from 'cerebral/tags';
import loadProducts from '../chains/loadProducts';

export default [
  set(state`page`, props`page`),
  loadProducts
];


// const pageChanged = [
//   setPageTitle(`currentPage`),
//   setLoading(true),
//   fetchProducts(), {
//     success: [setProducts(`results`)],
//     error: [showErrorMessage(`failed to fetch products`)]
//   },
//   setLoading(false)
// ];
