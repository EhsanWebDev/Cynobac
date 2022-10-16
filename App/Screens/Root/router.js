import React, {useEffect} from 'react';
import {navigationRef, isMountedRef} from '../../Utils/rNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';
import {GlobalStyles, Colors, Images, Fonts, Languages} from '@common';
import {Image, StyleSheet, View, Platform, Share} from 'react-native';
import HeaderRight from '../../Components/HeaderRight';
import HeaderLeft from '../../Components/HeaderLeft';

// Auth Flow
import Splash from '../Splash';
import LoginRegistration from '../LoginRegistration';
import Login from '../Login';
import Registration from '../Registration';
import EmailVerification from '../EmailVerification';
import Home from '../Home';
import SubmitReport from '../SubmitReport';
import MyEntry from '../MyEntry';
import MyEntryDetails from '../MyEntryDetails';
import AboutProject from '../AboutProject';
import UploadImages from '../UploadImages';
import QuestionAndAnswer from '../QuestionAndAnswer';
import Settings from '../Settings';
import ContactUs from '../ContactUs';
import Profile from '../Profile';
import ChangePassword from '../ChangePassword';
import ForgotPassword from '../ForgotPassword';

// Main Tab

const RootStack = createStackNavigator();

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const headerRightBlank = () => {
  return <View styles={{weidth: 40, height: 30}}></View>;
};
const headerLeftBlank = () => {
  return <View styles={{weidth: 30, height: 30}}></View>;
};

const headerOption = {
  headerStyle: {
    // backgroundColor: Colors.red,
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 0,
    shadowOffset: {
      height: 0,
    },
  },
  headerTitleStyle: {
    color: Colors.black,
    fontSize: 19,
    // fontFamily: Fonts.type.regular,
    alignSelf: 'center',
    // flex: 1,
  },
  headerTintColor: Colors.red,
};

const createMainStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen
      name="Splash"
      component={Splash}
      options={({navigation, route}) => ({
        headerShown: false,
      })}
    />
    <Stack.Screen
      name="LoginRegistration"
      component={LoginRegistration}
      options={({navigation, route}) => ({
        headerShown: false,
      })}
    />

    <Stack.Screen
      name="Login"
      component={Login}
      options={({navigation, route}) => ({
        headerShown: false,
        title: 'Login',
      })}
    />
    <Stack.Screen
      name="Registration"
      component={Registration}
      options={({navigation, route}) => ({
        headerShown: false,
        title: 'Registration',
      })}
    />
    <Stack.Screen
      name="EmailVerification"
      component={EmailVerification}
      options={({navigation, route, props}) => ({
        title: '',
        headerLeft: () => (
          <HeaderLeft backButton={true} navigation={navigation} />
        ),
        // headerRight: () => (
        //   <HeaderRight
        //     onPressNotification={() => navigation.navigate("Notifications")}
        //   />
        // ),
      })}
    />
    <Stack.Screen
      name="ForgotPassword"
      component={ForgotPassword}
      options={({navigation, route, props}) => ({
        title: Languages.forgotPassword1,
        headerLeft: () => (
          <HeaderLeft backButton={true} navigation={navigation} />
        ),
        // headerRight: () => (
        //   <HeaderRight
        //     onPressNotification={() => navigation.navigate("Notifications")}
        //   />
        // ),
      })}
    />
    <Stack.Screen
      name="Home"
      component={Home}
      options={({navigation, route}) => ({
        headerShown: false,
        title: 'Home',
      })}
    />
    <Stack.Screen
      name="Settings"
      component={Settings}
      options={({navigation, route, props}) => ({
        title: Languages.setting,
        headerLeft: () => (
          <HeaderLeft backButton={true} navigation={navigation} />
        ),
      })}
    />
    <Stack.Screen
      name="SubmitReport"
      component={SubmitReport}
      options={({navigation, route, props}) => ({
        title: Languages.insertData,
        headerLeft: () => (
          <HeaderLeft backButton={true} navigation={navigation} />
        ),
      })}
    />
    <Stack.Screen
      name="UploadImages"
      component={UploadImages}
      options={({navigation, route, props}) => ({
        title: Languages.insertData,
        headerLeft: () => (
          <HeaderLeft backButton={true} navigation={navigation} />
        ),
      })}
    />
    <Stack.Screen
      name="QuestionAndAnswer"
      component={QuestionAndAnswer}
      options={({navigation, route, props}) => ({
        title: Languages.insertData,
        headerLeft: () => (
          <HeaderLeft backButton={true} navigation={navigation} />
        ),
      })}
    />
    <Stack.Screen
      name="MyEntry"
      component={MyEntry}
      // options={({navigation, route, props}) => ({
      //   title: 'My Entry',
      //   headerLeft: () => (
      //     <HeaderLeft backButton={true} navigation={navigation} />
      //   ),
      // })}
    />
    <Stack.Screen
      name="MyEntryDetails"
      component={MyEntryDetails}
      options={({navigation, route, props}) => ({
        title: Languages.details,
        headerLeft: () => (
          <HeaderLeft backButton={true} navigation={navigation} />
        ),
      })}
    />

    <Stack.Screen
      name="AboutProject"
      component={AboutProject}
      options={({navigation, route, props}) => ({
        title: Languages.aboutProject,
        headerLeft: () => (
          <HeaderLeft backButton={true} navigation={navigation} />
        ),
      })}
    />

    <Stack.Screen
      name="ContactUs"
      component={ContactUs}
      options={({navigation, route, props}) => ({
        title: Languages.contactUs,
        headerLeft: () => (
          <HeaderLeft backButton={true} navigation={navigation} />
        ),
      })}
    />
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={({navigation, route, props}) => ({
        title: Languages.profile,
        headerLeft: () => (
          <HeaderLeft backButton={true} navigation={navigation} />
        ),
      })}
    />
    <Stack.Screen
      name="ChangePassword"
      component={ChangePassword}
      options={({navigation, route, props}) => ({
        title: Languages.changePassword,
        headerLeft: () => (
          <HeaderLeft backButton={true} navigation={navigation} />
        ),
      })}
    />
  </Stack.Navigator>
);

export default () => {
  useEffect(() => {
    isMountedRef.current = true;
    return () => (isMountedRef.current = false);
  }, []);
  return (
    <NavigationContainer ref={navigationRef}>
      {createMainStack()}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: 25,
    width: 25,
  },
});
