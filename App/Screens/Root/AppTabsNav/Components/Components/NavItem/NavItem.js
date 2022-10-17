import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {CustomText} from '@Typography';
import styles from '../../styles';
import itemStyles from './styles';

const NavItem = ({title = '', Icon, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.row, styles.spaceAmongItems]}>
      {Icon}
      <CustomText title={title} extraStyles={itemStyles.textStyles} />
    </TouchableOpacity>
  );
};

export default NavItem;
