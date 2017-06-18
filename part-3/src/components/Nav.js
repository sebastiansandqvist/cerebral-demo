import { connect } from 'cerebral/react';
import { signal } from 'cerebral/tags';

const Nav = ({ setPage }) => (
  <nav>
    <button onClick={() => setPage({ page: 'books' })}>View books</button>
    <button onClick={() => setPage({ page: 'movies' })}>View movies</button>
    <button onClick={() => setPage({ page: 'all' })}>View all</button>
  </nav>
);

export default connect({
  setPage: signal`changedPage`,
}, Nav);
