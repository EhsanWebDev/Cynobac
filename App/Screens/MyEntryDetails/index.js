import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

import {Languages, Images, Colors} from '@common';
import {SolidButton} from '@Buttons';
import {MediumText, CustomText} from '@Typography';
import styles from './styles';
import AlertApi from '../../Services/alert';
import OtherActions from '../../Redux/Other/reducer';
import Swiper from 'react-native-swiper';
import {Constants} from '../../Common';
import {Icon} from 'react-native-elements';
import RadioButtonList from '../../Components/RadioButtonList';
import RadioButtonListItem from '../../Components/RadioButtonListItem';
import ReportItem from '../../Components/ReportItem/ReportItem';
const dataGender = [Languages.male, Languages.female, Languages.other];

const MyEntryDetails = ({root, navigation}) => {
  const {myEntrySelectedData} = useSelector(state => state.other);
  const user = useSelector(state => state.user);
  const {role} = user || {};
  const dispatch = useDispatch();

  const [selectedGender, setSelectedGender] = useState(false);

  useEffect(() => {
    console.log('other', myEntrySelectedData);
  }, [myEntrySelectedData]);

  const onPressApproveReject = async (status, alertMessage) => {
    navigation.navigate('MyEntryDetails');
    const confirm = await AlertApi.confirm(
      alertMessage,
      Languages.okay,
      Languages.cancel,
    );

    if (confirm) {
      dispatch(
        OtherActions.updateStatus({
          id: myEntrySelectedData.item.id,
          status: status,
        }),
      );
    }
  };

  const RenderDetails = ({item}) => (
    <View style={styles.headerViewContainer}>
      <View>
        <MediumText textStyle={styles.itemId}>
          {`${Languages.id}: ${myEntrySelectedData.item.id}`}
        </MediumText>
        <MediumText textStyle={styles.itemLocation}>
          {`${Languages.location}: ${myEntrySelectedData.item.latitude}, ${myEntrySelectedData.item.longitude}`}
        </MediumText>
        <MediumText textStyle={styles.itemLocation}>
          {myEntrySelectedData.item.address}
        </MediumText>
        <MediumText
          textStyle={[styles.itemSubmitedOnKey, styles.itemSubmitedOnKey1]}>
          {Languages.submitedOn}
          <MediumText textStyle={styles.itemLocation}>
            {myEntrySelectedData.item.updated_at}
          </MediumText>
        </MediumText>
        <MediumText textStyle={styles.itemSubmitedOnKey}>
          {Languages.submitedBy}
          <MediumText textStyle={styles.itemLocation}>
            {myEntrySelectedData.item.user.name}
          </MediumText>
        </MediumText>
      </View>
    </View>
  );
  const RenderQuestionAnswer = ({question, answer}) => (
    <View style={styles.headerViewContainer}>
      <View>
        <CustomText title={question} bold />
        <RadioButtonListItem
          listItemStyle={{marginTop: 12, paddingHorizontal: 0}}
          checkedIconOnly
          title={answer}
        />
      </View>
    </View>
  );

  const {item} = myEntrySelectedData || {};
  const {
    id,
    images,
    address,
    longitude,
    latitude,
    waterConditions,
    whatAreYouDoingHere,
    cynobatrial,
    substrate,
    created_at,
    username,
  } = item || {};
  console.log({item});
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <CustomText
          bold
          title={`ID: ${id}`}
          size={19}
          extraStyles={styles.headerText}
        />
        <TouchableOpacity
          onPress={() => navigation?.goBack()}
          style={styles.headerButton}>
          <Icon size={20} name="close" color={Colors.primaryText} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        {role === 'Admin' && (
          <View style={{marginHorizontal: 20, marginTop: 22, marginBottom: 14}}>
            <View>
              <CustomText title="Submitted by:" bold />
              <CustomText title={username} extraStyles={{marginVertical: 8}} />
            </View>
            <View style={{marginTop: 12}}>
              <CustomText title="Submitted on:" bold />
              <CustomText
                title={created_at}
                extraStyles={{marginVertical: 8}}
              />
            </View>
          </View>
        )}
        <View>
          {(images || []).length > 0 ? (
            <Swiper
              showsPagination={false}
              nextButton={
                <View
                  style={{
                    height: 36,
                    width: 36,
                    borderRadius: 18,
                    backgroundColor: Colors.white,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon name="chevron-right" />
                </View>
              }
              prevButton={
                <View
                  style={{
                    height: 36,
                    width: 36,
                    borderRadius: 18,
                    backgroundColor: Colors.white,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon name="chevron-left" />
                </View>
              }
              style={{height: 250, marginTop: 22}}
              showsButtons={images?.length > 1}>
              {images.map((item, index) => (
                <Image
                  source={{uri: item}}
                  style={{width: Constants.screenWidth, height: 250}}
                />
              ))}
            </Swiper>
          ) : (
            <View style={{alignItems: 'center', marginTop: 32}}>
              <CustomText title="No images" bold />
            </View>
          )}

          <View style={styles.detailsContainer}>
            <View style={styles.locationContainer}>
              <ReportItem
                withIcon
                reportLocation={`${latitude}, ${longitude}`}
                address={address}
              />
            </View>
            <RenderQuestionAnswer
              question={Languages.wharAreYouDoingHere}
              answer={`${whatAreYouDoingHere}`}
            />
            <RenderQuestionAnswer
              question={Languages.cynobatrialBloom}
              answer={`${cynobatrial}`}
            />
            <RenderQuestionAnswer
              question={Languages.substrate}
              answer={`${substrate}`}
            />
            <RenderQuestionAnswer
              question={Languages.weaterConditions}
              answer={`${waterConditions}`}
            />
          </View>

          <View style={styles.buttonContainerStyle}>
            {(myEntrySelectedData.tabChangeIndex === 0 ||
              myEntrySelectedData.tabChangeIndex === 1) &&
              user.role !== 'Public Testers' && (
                <SolidButton
                  outlined
                  buttonStyle={styles.buttonStyle}
                  title={Languages.reject}
                  onPress={() =>
                    onPressApproveReject('Rejected', Languages.sureReject)
                  }
                />
              )}
            {(myEntrySelectedData.tabChangeIndex === 0 ||
              myEntrySelectedData.tabChangeIndex === 2) &&
              user.role !== 'Public Testers' && (
                <SolidButton
                  buttonStyle={styles.buttonStyle}
                  title={'Accept'}
                  onPress={() =>
                    onPressApproveReject('Approved', Languages.sureAprove)
                  }
                />
              )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default MyEntryDetails;
