import React, { Component } from 'react';
import { render } from 'react-dom';
import { Container } from 'cerebral/react';
import controller from './controller';
import App from './App.js';

render((
  <Container controller={controller}>
    <App onInit={controller.getSignal('initialized')} />
  </Container>
), document.getElementById('app'));
