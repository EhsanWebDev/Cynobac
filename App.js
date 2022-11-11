import React from 'react';
import {Provider} from 'react-redux';
import Root from './App/Screens/Root';
import createStore from './App/Stores/reducer';
import {LogBox} from 'react-native';
// LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
// LogBox.ignoreAllLogs();//Ignore all log notifications
global.__reanimatedWorkletInit = () => {};
export default () => {
  const {store} = createStore();
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
};
