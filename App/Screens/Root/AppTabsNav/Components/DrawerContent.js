import React from 'react';
import {SafeAreaView, TouchableOpacity, View} from 'react-native';
import {Avatar, Icon} from 'react-native-elements';
import {CustomText} from '@Typography';
import {Fonts, Colors, Languages} from '@common';
import styles from './styles';
import {ChatIcon, FaqIcon, HomeIcon} from '../../../../../assets/SVGs';
import NavItem from './Components/NavItem/NavItem';
import AlertApi from '../../../../Services/alert';
import {useDispatch, useSelector} from 'react-redux';
import UserActions from '../../../../Redux/User/reducer';

function DrawerContent({navigation, ...rest}) {
  const dispatch = useDispatch();
  const {firstname, lastname} = useSelector(store => store.user);
  // console.log({user});

  const onPressLogout = async () => {
    const confirm = await AlertApi.confirm(
      Languages.sureLogout,
      Languages.okay,
      Languages.cancel,
    );

    if (confirm) {
      reset();
    }
  };

  const reset = () => {
    dispatch(UserActions.resetUser());
    navigation.navigate('LoginRegistration');
  };

  const navigate = name => {
    navigation?.navigate(name);
  };

  return (
    <SafeAreaView style={styles.container} {...rest}>
      <View style={[styles.rowSB, styles.spaceMax]}>
        <View style={styles.row}>
          <Avatar
            size={40}
            rounded
            source={{
              uri: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
            }}
          />
          <View style={styles.nameContainer}>
            <CustomText title={`${firstname} ${lastname}`} bold />
            <TouchableOpacity onPress={() => navigate('Profile')}>
              <CustomText
                title="View profile"
                color={Colors.primaryTextMuted}
                size={Fonts.size.small}
              />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => navigation.closeDrawer()}
          style={styles.closeButton}>
          <Icon name="close" color={Colors.primaryText} />
        </TouchableOpacity>
      </View>
      <View>
        <NavItem
          title="Home"
          Icon={<HomeIcon />}
          onPress={() => navigation?.closeDrawer()}
        />
        <NavItem
          title="Submit new data"
          Icon={<Icon type="feather" name="upload" />}
          onPress={() => navigate('SubmitReport')}
        />
        <NavItem
          title="My data"
          Icon={<Icon type="antdesign" name="folderopen" />}
          onPress={() => navigate('MyEntry')}
        />
        <NavItem
          title="About project"
          Icon={<Icon name="info-outline" />}
          onPress={() => navigate('AboutProject')}
        />
        <NavItem
          title="Contact us"
          Icon={<ChatIcon />}
          onPress={() => navigate('ContactUs')}
        />
        <NavItem title="FAQ" Icon={<FaqIcon />} />
        <NavItem
          title="Settings"
          Icon={<Icon type="antdesign" name="setting" />}
          onPress={() => navigate('Settings')}
        />
      </View>
      <View style={styles.signOut}>
        <NavItem
          title="Sign out"
          Icon={<Icon type="feather" name="log-out" />}
          onPress={onPressLogout}
        />
      </View>
    </SafeAreaView>
  );
}

export default DrawerContent;
