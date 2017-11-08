import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Immutable from 'seamless-immutable';
import rootReducer from './reducers';

export function configureStore(initialState) {
  const middlewares = [
    thunk,
  ];

  const composeEnhancers = (
    typeof window === 'object' &&
    // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

  const store = createStore(rootReducer, Immutable(initialState), composeEnhancers(
    applyMiddleware(...middlewares),
  ));

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      // eslint-disable-next-line global-require
      store.replaceReducer((require('./reducers').default));
    });
  }

  return store;
}
