import React from 'react';
import { Provider } from 'react-redux';
import { Route, HashRouter } from 'react-router-dom';
import store from 'redux-flow';

import Details from 'containers/Details';

export default () => (
  <Provider store={store}>
    <HashRouter>
      <Route exact path="/" component={Details} />
    </HashRouter>
  </Provider>
);
