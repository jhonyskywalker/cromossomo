import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { Route, HashRouter } from 'react-router-dom';
import store from 'redux-flow';

import GlobalStyle from 'design-system/globalStyle';
import Details from 'containers/Details';

export default () => (
  <Fragment>
    <GlobalStyle />
    <Provider store={store}>
      <HashRouter>
        <Route exact path="/" component={Details} />
      </HashRouter>
    </Provider>
  </Fragment>
);
