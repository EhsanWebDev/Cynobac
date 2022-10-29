import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, SafeAreaView, ScrollView} from 'react-native';
import {Languages, Images} from '@common';
import {CustomText} from '@Typography';
import styles from './styles';
import OtherActions from '../../Redux/Other/reducer';
import Header from '../../Components/Header/Header';
import {Icon} from 'react-native-elements';
import Colors from '../../Common/Colors';

const ContactUs = ({navigation}) => {
  const user = useSelector(state => state.user);
  const {contactUsData} = useSelector(state => state.other);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(OtherActions.contactUs({language: user.language}));
  }, [dispatch, user.language]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Header onBackPress={navigation.goBack} title="Contact us" />
      </View>
      <ScrollView>
        <View style={styles.descContainer}>
          {contactUsData?.mobile_no && (
            <View style={styles.headingContainer}>
              <View style={styles.iconContainer}>
                <Icon name="phone-call" type="feather" color={Colors.white} />
              </View>
              <View style={styles.mtop}>
                <CustomText size={19} bold title="Call us" />
                <CustomText
                  extraStyles={{marginTop: 12}}
                  color={Colors.primaryTextMuted}
                  title={`${contactUsData.mobile_no}`}
                />
                <CustomText
                  extraStyles={styles.mtop}
                  color={Colors.primaryTextMuted}
                  title={`${contactUsData.description}`}
                />
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default ContactUs;
