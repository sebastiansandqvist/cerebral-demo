import { connect } from 'cerebral/react';
import { signal, state } from 'cerebral/tags';

const SearchInput = ({ query, search }) => (
  <div>
    <input type='text' value={query} onInput={(event) => search({ query: event.target.value })} placeholder='Search' />
  </div>
);

export default connect({
  query: state`query`,
  search: signal`searched`
}, SearchInput);
