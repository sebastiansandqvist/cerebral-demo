import { splice } from 'cerebral/operators'
import { state, props } from 'cerebral/tags';

export default [
  splice(state`cart`, props`index`, 1)
];
