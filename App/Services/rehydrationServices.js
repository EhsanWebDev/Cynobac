import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore} from 'redux-persist';
import ReduxPersist from '../Utils/reduxPersist';
import actions from '../Redux/Root/reducer';

const updateReducers = store => {
  const {reducerVersion} = ReduxPersist;
  const startup = () => store.dispatch(actions.startup());

  // Check to ensure latest reducer version
  AsyncStorage.getItem('reducerVersion')
    .then(localVersion => {
      if (localVersion !== reducerVersion) {
        // Purge store
        AsyncStorage.setItem('reducerVersion', reducerVersion);
        return persistStore(store, {}, startup).purge();
      }

      return persistStore(store, {}, startup);
    })
    .catch(() => {
      AsyncStorage.setItem('reducerVersion', reducerVersion);
      return persistStore(store, {}, startup);
    });
};

export default {updateReducers};
