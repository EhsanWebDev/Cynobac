import React from 'react';
import {useSelector} from 'react-redux';
import {View} from 'react-native';
import styles from './styles';
import {Languages} from '@common';
import {CustomText} from '@Typography';
import {SplashImg} from '../../../assets/SVGs';

const Splash = ({navigation}) => {
  const user = useSelector(state => state.user);
  Languages.setLanguage(user.language);

  return (
    <View style={styles.container}>
      <SplashImg />
      <CustomText title="InfoCyano" size={40} />
    </View>
  );
};
export default Splash;
