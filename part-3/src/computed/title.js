import { compute } from 'cerebral';
import { state } from 'cerebral/tags';

const pageMap = {
  books: 'Book Store',
  movies: 'Movie Store',
  all: 'Everything Store'
};

export default compute(
  state`page`,
  function(page) {
    return pageMap[page]
  }
);
