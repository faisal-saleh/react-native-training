import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';

const configureStore = initialState => {
  const middleware = [thunk];
  const enhancers = [];

  middleware.push(logger);
  enhancers.push(applyMiddleware(...middleware));

  return createStore(rootReducer, initialState, compose(...enhancers));
};

export const store = configureStore();
