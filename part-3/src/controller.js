import { Controller } from 'cerebral';
import HttpProvider from '@cerebral/http';
import Devtools from 'cerebral/devtools';

import initialized from './signals/initialized';
import changedPage from './signals/changedPage';
import searched from './signals/searched';
import addedToCart from './signals/addedToCart';
import removedFromCart from './signals/removedFromCart';

const controller = Controller({
  state: {
    isLoading: false,
    page: 'books',
    errorMessage: '',
    query: '',
    cart: [],
    products: []
  },
  signals: {
    initialized,
    changedPage,
    searched,
    addedToCart,
    removedFromCart,
  },
  providers: [
    HttpProvider({
      baseUrl: 'https://mithril-examples.firebaseio.com'
    })
  ],
  devtools: Devtools({
    host: 'localhost:8000'
  })
});

export default controller;
