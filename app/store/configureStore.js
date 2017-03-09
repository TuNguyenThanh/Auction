import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { persistStore, autoRehydrate } from 'redux-persist';
import reducers from '../reducers';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    ),
    autoRehydrate(),
  );
  const store = createStore(reducers, initialState, enhancer);
  // persistStore(store, { storage: AsyncStorage }, (text) => {
  //   console.log(`text ${text}`);
  // });
  return store;
}

export default configureStore;
