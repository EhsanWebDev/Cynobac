import {combineReducers} from 'redux';
import configureStore from './createStore';
import rootSaga from './sagas';

const createStore = () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    app: require('../Redux/Root/reducer').reducer,
    user: require('../Redux/User/reducer').reducer,
    other: require('../Redux/Other/reducer').reducer,
  });
  return configureStore(rootReducer, rootSaga);
};

// singleton
class Store {
  static instance;
  store;

  constructor() {
    if (Store.instance) {
      return Store.instance;
    }

    Store.instance = this;
    const {store} = createStore();
    this.store = store;

    return this;
  }
}

export default () => {
  const s = new Store();
  return {store: s.store};
};
