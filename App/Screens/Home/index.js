import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import {Colors, Languages} from '@common';
import {CustomText} from '@Typography';
import styles from './styles';
import {ArrowWithCircle, MenuIcon} from '../../../assets/SVGs';
import ReportItem from '../../Components/ReportItem/ReportItem';
import OtherActions from '../../Redux/Other/reducer';
import moment from 'moment/moment';
import Immutable from 'seamless-immutable';

const Home = ({navigation}) => {
  const A_MONTH = moment(new Date()).subtract(30, 'days');

  const dispatch = useDispatch();
  const store = useSelector(store => store);
  const {user, other} = store || {};
  const {myEntryData} = other || {};
  const {role} = user || {};
  const isAdmin = role === 'Admin';

  useEffect(() => {
    dispatch(OtherActions.myEntry({language: user?.language}));
  }, [dispatch, user]);

  const onPress = screen => {
    navigation.navigate(screen);
  };
  const onReportPress = item => {
    dispatch(
      OtherActions.myEntrySelectedData({
        item,
        tabChangeIndex: 0,
      }),
    );
    navigation.navigate('MyEntryDetails');
  };

  const newEntries = (myEntryData || []).reduce(
    (total, item) => (item?.status === 'Pending' ? total + 1 : total + 0),
    0,
  );
  const filteredEntries = (myEntryData || []).filter(entry => {
    const {status, created_at} = entry || {};
    if (status === 'Pending') {
      return !!moment(created_at).isSameOrAfter(A_MONTH);
    }
    return false;
  });

  const sorted = Immutable.asMutable(filteredEntries).sort(
    (f, g) => new Date(g.created_at) - new Date(f.created_at),
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <View style={styles.innerContainer}>
          <TouchableOpacity onPress={() => navigation?.openDrawer()}>
            <MenuIcon color={Colors.primaryText} />
          </TouchableOpacity>

          <View style={styles.headingContainer}>
            <CustomText size={24} bold title={`Hello ${user.firstname},`} />
            <CustomText
              color={Colors.primaryTextMuted}
              title={Languages.welcomeBack}
            />
          </View>
          <TouchableOpacity
            onPress={() => onPress(isAdmin ? 'MyEntry' : 'SubmitReport')}
            style={styles.submitNewReportContainer}>
            <CustomText
              size={19}
              bold
              title={
                isAdmin
                  ? `${Languages.newSubmissions}: ${newEntries}
${Languages.tapToReview}`
                  : `${Languages.suspecting}
${Languages.submitNewData}`
              }
            />
            <View style={{alignItems: 'flex-end'}}>
              <ArrowWithCircle />
            </View>
          </TouchableOpacity>
          <View style={styles.seeAllContainer}>
            <View style={styles.seeAllBar}>
              <CustomText size={19} title={Languages.recentlySubmitted} bold />
              <TouchableOpacity onPress={() => onPress('MyEntry')}>
                <CustomText
                  title={Languages.seeAll}
                  color={Colors.primaryTextMuted}
                />
              </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
              {(sorted || []).map((item, index) => {
                const {id, latitude, longitude, address, status} = item || {};
                return (
                  <ReportItem
                    key={id}
                    onPress={() => onReportPress(item)}
                    reportId={id}
                    reportLocation={`${latitude}, ${longitude}`}
                    address={address}
                    {...item}
                  />
                );
              })}
            </ScrollView>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Home;
