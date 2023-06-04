import React, {useEffect} from 'react';
import {View, BackHandler} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Navigation from './router';
import Loading from '../../Components/Loading';
import {GlobalStyles} from '@common';
import ReduxPersist from '../../Utils/reduxPersist';
import Actions from '../../Redux/Root/reducer';
import {NativeBaseProvider} from 'native-base';

export default () => {
  const loading = useSelector(state => state.app.loading);
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', function () {
      return true;
    });

    if (!ReduxPersist.active) {
      dispatch(Actions.startup());
    }
  });
  return (
    <View style={[GlobalStyles.style.flex1]}>
      <NativeBaseProvider>
        <Navigation />
      </NativeBaseProvider>
      {!loading ? null : <Loading />}
    </View>
  );
};
