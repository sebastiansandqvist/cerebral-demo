import { connect } from 'cerebral/react';
import { state } from 'cerebral/tags';

const props = {
  error: state`errorMessage`
};

const ErrorComponent = ({ error }) => (
  <h3 style={{color: '#f55'}}>{error ? `Error! ${error}` : ''}</h3>
);

export default connect(props, ErrorComponent);
