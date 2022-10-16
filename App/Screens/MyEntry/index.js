import React, {useEffect, useState, useLayoutEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  Text,
  Image,
  FlatList,
  Animated,
} from 'react-native';
// import { Container, Content } from 'native-base';
import {Languages, Images, Colors} from '@common';
import {SolidButton} from '@Buttons';
import {RegularText, XLText, TextWithImage, MediumText} from '@Typography';
import styles from './styles';
import UserActions from '../../Redux/User/reducer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import OtherActions from '../../Redux/Other/reducer';
import HeaderLeft from '../../Components/HeaderLeft';
import HeaderRight from '../../Components/HeaderRight';
import EmptyList from '../../Components/EmptyList';
const MyEntry = ({navigation}) => {
  const other = useSelector(state => state.other);
  const user = useSelector(state => state.user);

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
      var array = [...other.myEntryData]; //[{id: 1, date:'2022-07-03T05:40:00.000000Z'}, {id: 2, date:'2022-07-04T11:47:56.000000Z'}];
      // var array = [{id: 1, created_at:'2022-07-03T05:40:00.000000Z'}, {id: 2, created_at:'2022-07-04T11:47:56.000000Z'}, {id: 2, created_at:'2022-09-04T11:47:56.000000Z'}];

      console.log('array', array);

      const aa = array.sort(function (a, b) {
        var c = new Date(a.updated_at);
        var d = new Date(b.updated_at);
        console.log('rrrrrr', c);
        console.log('rrrrrr2111', d);
        return d - c;
      });
      console.log('test', aa);
      // var s = [other.myEntryData];
      // const aaaa = s.sort((a, b) => {
      //   console.log("aTest",a);
      //   console.log("bTest",b);
      //     var c = new Date(a.date).getTime();
      //     var d = new Date(b.date).getTime();
      //      return c-d;
      //   //       var d = new Date(b.date);
      //   // return new Date(b.created_at) > new Date(a.created_at);
      // });
      // console.log("aaaa",aaaa);

      other.myEntryData.map(item => {
        if (item.status === 'Pending') {
          pendindData.push(item);
        } else if (item.status === 'Approved') {
          approvedData.push(item);
        } else {
          rejectedData.push(item);
        }
      });
      setPending(pendindData);
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
                  backgroundColor: isFocused ? Colors.red : Colors.white,
                },
              ]}>
              {/* <Text style={{opacity}}>{label}</Text> */}
              {/* <Animated.Text
                style={{
                  opacity
                }}>
                {label}
              </Animated.Text> */}
              <Animated.Text
                style={[
                  styles.tabBarText,
                  {color: isFocused ? Colors.white : Colors.red},
                ]}>
                {label}
              </Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };
  const RenderNewEntry = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => onPressItem(item)}
        style={styles.listItemContainer}>
        <View>
          <MediumText textStyle={styles.itemId}>
            {`${Languages.id}: ${item.id}`}
          </MediumText>
          <MediumText textStyle={styles.itemLocation}>
            {`${Languages.location}: ${item.latitude}, ${item.longitude}`}
          </MediumText>
          <MediumText textStyle={styles.itemLocation}>
            {item.address}
          </MediumText>
        </View>
        <Image style={styles.itemImage} source={Images.forwardArrowGray} />
      </TouchableOpacity>
    );
  };

  const renderItem = ({item}) => <RenderNewEntry item={item} />;

  const NewEntry = () => {
    return (
      <View style={styles.listContainer}>
        <FlatList
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
      {/* <NavigationContainer> */}
      <Tab.Navigator
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
