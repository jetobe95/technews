import { applyMiddleware, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import { reducers } from '../reducers/index';

const persistConfig = { key: 'root', storage , whitelist: ['User',"News"] };
const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(
  persistedReducer,

  applyMiddleware(logger,thunk)
);
const persistor = persistStore(store);

export { persistor, store };

