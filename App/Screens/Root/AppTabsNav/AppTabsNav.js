import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {View} from 'react-native';
import {Icon} from 'react-native-elements';
import {useSelector} from 'react-redux';
import {HomeIcon, UserIcon} from '../../../../assets/SVGs';
import Colors from '../../../Common/Colors';
import Home from '../../Home';
import Profile from '../../Profile';
import SubmitReport from '../../SubmitReport';
import DrawerContent from './Components/DrawerContent';

const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const AppTabs = () => {
  const user = useSelector(state => state.user);
  const {role} = user || {};
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {height: 100, paddingTop: 10},
      }}>
      <Tabs.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <>
              <HomeIcon />
              {focused && (
                <View
                  style={{
                    height: 2,
                    width: 22,
                    backgroundColor: Colors.green,
                    marginTop: 2,
                  }}
                />
              )}
            </>
          ),
        }}
      />
      {role !== 'Admin' && (
        <>
          <Tabs.Screen
            name="SubmitReport"
            component={SubmitReport}
            options={{
              tabBarIcon: ({focused, color, size}) => (
                <>
                  <View
                    style={{
                      backgroundColor: Colors.primaryBG,
                      height: 54,
                      width: 54,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 26,
                    }}>
                    <Icon name="add" color="white" size={32} />
                  </View>
                </>
              ),
              tabBarStyle: {display: 'none'},
            }}
          />
        </>
      )}
      <Tabs.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <>
              <UserIcon />
              {focused && (
                <View
                  style={{
                    height: 2,
                    width: 22,
                    backgroundColor: Colors.green,
                    marginTop: 2,
                  }}
                />
              )}
            </>
          ),
          tabBarStyle: {display: 'none'},
        }}
      />
    </Tabs.Navigator>
  );
};

const AppDrawer = () => (
  <Drawer.Navigator
    drawerContent={props => <DrawerContent {...props} />}
    screenOptions={{
      headerShown: false,
      drawerType: 'front',
      // drawerPosition: 'right',
      drawerStyle: {width: '100%'},
    }}>
    <Drawer.Screen
      name="app_tabs"
      component={AppTabs}
      options={{drawerLabel: 'Home'}}
    />
  </Drawer.Navigator>
);

const AppMainNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name={'dashboard'} component={AppDrawer} />
  </Stack.Navigator>
);

export default AppMainNavigator;
