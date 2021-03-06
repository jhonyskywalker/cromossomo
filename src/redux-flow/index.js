import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import reducers from 'redux-flow/reducers';

const initialStore = {};

const store = createStore(
  reducers,
  initialStore,
  composeWithDevTools(applyMiddleware(thunkMiddleware)),
);

export default store;
