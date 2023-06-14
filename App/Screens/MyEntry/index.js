import React, {useEffect, useState, useLayoutEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  Animated,
} from 'react-native';
import {Languages, Images, Colors} from '@common';
import {MediumText, CustomText} from '@Typography';
import styles from './styles';
import UserActions from '../../Redux/User/reducer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import OtherActions from '../../Redux/Other/reducer';
import HeaderLeft from '../../Components/HeaderLeft';
import HeaderRight from '../../Components/HeaderRight';
import EmptyList from '../../Components/EmptyList';
import ReportItem from '../../Components/ReportItem/ReportItem';
import Header from '../../Components/Header/Header';
import moment from 'moment';
const MyEntry = ({navigation, route}) => {
  const A_MONTH = moment(new Date()).subtract(30, 'days');
  const {params} = route || {};
  const {fromDone, screenTitle} = params || {};
  const other = useSelector(state => state.other);
  const user = useSelector(state => state.user);
  const {role} = user || {};

  const [pending, setPending] = useState([]);
  const [approved, setApproved] = useState([]);
  const [rejected, setRejected] = useState([]);
  const [tabChangeIndex, setTabChangeIndex] = useState([]);

  const dispatch = useDispatch();

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     title: assesmentSelectedItem.side
  //       ? `${assesmentSelectedItem.side.name}  ${assesmentSelectedItem.body.name}`
  //       : assesmentSelectedItem.body.name,
  //   });
  // }, [navigation, assesmentSelectedItem]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title:
        user.role === 'Public Testers' ? Languages.myEntry : Languages.entry,
      headerLeft: () => (
        <HeaderLeft
          backNavigationName={'Home'}
          backButton={user.role === 'Public Testers' ? true : false}
          navigation={navigation}
        />
      ),
      headerRight: () => (
        <HeaderRight
          showHeaderRight={user.role === 'Public Testers' ? false : true}
          navigation={navigation}
        />
      ),
    });
  }, [navigation, user.role]);

  useEffect(() => {
    dispatch(OtherActions.myEntry({language: user.language}));
  }, [dispatch, user.language]);
  useEffect(() => {
    const pendindData = [];
    const approvedData = [];
    const rejectedData = [];

    // updated_at
    if (other && other.myEntryData && other.myEntryData.length > 0) {
      other.myEntryData.map(item => {
        if (item.status === 'Pending') {
          pendindData.push(item);
        } else if (item.status === 'Approved') {
          approvedData.push(item);
        } else {
          rejectedData.push(item);
        }
      });
      const filteredPendingData = (pendindData || []).filter(entry => {
        const {status, created_at} = entry || {};
        if (status === 'Pending') {
          return !!moment(created_at).isSameOrAfter(A_MONTH);
        }
        return false;
      });
      setPending(filteredPendingData);
      setApproved(approvedData);
      setRejected(rejectedData);
    }
  }, [other, other.myEntryData]);

  const onPressItem = item => {
    dispatch(OtherActions.myEntrySelectedData({item, tabChangeIndex}));
    navigation.navigate('MyEntryDetails');
  };

  const Tab = createMaterialTopTabNavigator();

  const MyTabBar = ({state, descriptors, navigation, position}) => {
    setTabChangeIndex(state.index);
    return (
      <View style={styles.tabBarMainContainer}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
          // modify inputRange for custom behavior
          const inputRange = state.routes.map((_, i) => i);
          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={[
                styles.tabBarContainer,
                {
                  backgroundColor: isFocused ? Colors.green : Colors.white,
                  borderRightWidth: index === 1 ? 0 : 1,
                  borderLeftWidth: index === 1 ? 0 : 1,
                  borderWidth: 1,
                  borderTopRightRadius: index == 2 ? 10 : 0,
                  borderBottomRightRadius: index === 2 ? 10 : 0,
                  borderTopLeftRadius: index === 0 ? 10 : 0,
                  borderBottomLeftRadius: index === 0 ? 10 : 0,
                  borderColor: Colors.lightGray,
                },
              ]}>
              <CustomText
                title={label}
                color={isFocused ? Colors.white : Colors.primaryText}
                size={13}
                bold
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  console.log({pending});
  const RenderNewEntry = ({item}) => {
    return (
      <ReportItem
        key={item.id}
        onPress={() => onPressItem(item)}
        reportId={item?.id}
        reportLocation={`${item.latitude}, ${item.longitude}`}
        address={item.address}
        {...item}
      />
    );
  };

  const renderItem = ({item, ...rest}) => (
    <RenderNewEntry item={item} {...rest} />
  );

  const NewEntry = () => {
    return (
      <View style={styles.listContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={
            tabChangeIndex === 0
              ? pending
              : tabChangeIndex === 1
              ? approved
              : rejected
          }
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContentContainerStyle}
          ListEmptyComponent={
            <EmptyList emptyTitle={Languages.emptyEntryList} />
          }
        />
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginTop: 20, marginHorizontal: 20}}>
        <Header
          title={role === 'Admin' ? 'Entries' : Languages.myData}
          onBackPress={() => {
            if (fromDone) {
              navigation?.navigate('home');
              return;
            }
            navigation?.goBack();
          }}
        />
      </View>

      <Tab.Navigator
        style={{marginTop: 12}}
        // initialRouteName={Languages.approved}
        tabBar={props => <MyTabBar {...props} />}>
        <Tab.Screen name={Languages.newEntry} component={NewEntry} />
        <Tab.Screen name={Languages.approved} component={NewEntry} />
        <Tab.Screen name={Languages.rejected} component={NewEntry} />
      </Tab.Navigator>
      {/* plus */}
      {user.role === 'Public Testers' && (
        <TouchableOpacity
          style={styles.plusContainer}
          onPress={() => navigation.navigate('SubmitReport')}>
          <Image style={styles.plusImageStyle} source={Images.plus} />
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};
export default MyEntry;
