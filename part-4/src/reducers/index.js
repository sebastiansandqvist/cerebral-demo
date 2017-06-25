import { combineReducers } from 'redux';

import app from './app';

// would do something like this in a larger application:
// const rootReducer = combineReducers({ app, cart, user, ... });

const rootReducer = app;

export default rootReducer;
