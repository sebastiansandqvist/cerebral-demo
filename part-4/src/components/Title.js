import React from 'react'
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    isLoading: state.isLoading,
    page: state.page,
  };
}

const pageMap = {
  books: 'Book Store',
  movies: 'Movie Store',
  all: 'Everything Store'
};

const Title = ({ isLoading, page }) => (
  <h1>{isLoading ? 'Loading...' : pageMap[page]}</h1>
);

export default connect(mapStateToProps)(Title);
