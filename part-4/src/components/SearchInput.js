import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/actionCreators';

function mapStateToProps(state) {
  return { query: state.query };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const SearchInput = ({ query, setQuery }) => (
  <div>
    <input type='text' value={query} onChange={(event) => setQuery(event.target.value)} placeholder='Search' />
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
