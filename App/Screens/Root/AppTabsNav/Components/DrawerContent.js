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
  const {firstname, lastname, role, ...user} = useSelector(store => store.user);

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
    navigation?.closeDrawer();
    navigation.navigate('LoginRegistration');
  };

  const navigate = (name, params) => {
    navigation?.navigate(name, params);
  };
  const isAdmin = role === 'Admin';

  return (
    <SafeAreaView style={styles.container} {...rest}>
      <View style={[styles.rowSB, styles.spaceMax]}>
        <View style={styles.row}>
          <View style={styles.nameContainer}>
            <CustomText title={`${firstname} ${lastname}`} bold />
            <TouchableOpacity onPress={() => navigate('Profile')}>
              <CustomText
                title={Languages.viewProfile}
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
          title={Languages.home}
          Icon={<HomeIcon />}
          onPress={() => navigate('home')}
        />
        {!isAdmin && (
          <>
            <NavItem
              title={Languages.submitNewData}
              Icon={<Icon type="feather" name="upload" />}
              onPress={() => navigate('SubmitReport')}
            />
          </>
        )}

        <NavItem
          title={isAdmin ? Languages.submissions : Languages.myData}
          Icon={<Icon type="antdesign" name="folderopen" />}
          onPress={() =>
            navigate('MyEntry', {screenTitle: isAdmin ? 'Entries' : 'My data'})
          }
        />
        <NavItem
          title={Languages.aboutProject}
          Icon={<Icon name="info-outline" />}
          onPress={() => navigate('AboutProject')}
        />
        {!isAdmin && (
          <NavItem
            title={Languages.contactUs}
            Icon={<ChatIcon />}
            onPress={() => navigate('ContactUs')}
          />
        )}

        <NavItem
          title="FAQ"
          Icon={<FaqIcon />}
          onPress={() => navigate('FAQ')}
        />
        <NavItem
          title={Languages.settings}
          Icon={<Icon type="antdesign" name="setting" />}
          onPress={() => navigate('Settings')}
        />
      </View>
      <View style={styles.signOut}>
        <NavItem
          title={Languages.signout}
          Icon={<Icon type="feather" name="log-out" />}
          onPress={onPressLogout}
        />
      </View>
    </SafeAreaView>
  );
}

export default DrawerContent;
