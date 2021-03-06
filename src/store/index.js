import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index.js';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const logger = createLogger();
const store = createStore(
  rootReducer,
  undefined,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
