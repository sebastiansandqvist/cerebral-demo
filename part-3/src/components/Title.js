import { connect } from 'cerebral/react';
import { state } from 'cerebral/tags';
import title from '../computed/title';

const Title = ({ isLoading, title }) => (
  <h1>{isLoading ? 'Loading...' : title}</h1>
);

export default connect({
  isLoading: state`isLoading`,
  title: title
}, Title);
