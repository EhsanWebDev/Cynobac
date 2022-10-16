import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, SafeAreaView, ScrollView} from 'react-native';
// import { Container, Content } from 'native-base';
import {Languages, Images, Colors} from '@common';
import {SolidButton} from '@Buttons';
import {RegularText, XLText, TextWithImage, MediumText} from '@Typography';
import styles from './styles';
import UserActions from '../../Redux/User/reducer';
import {SliderBox} from 'react-native-image-slider-box';
import AlertApi from '../../Services/alert';
import OtherActions from '../../Redux/Other/reducer';

const MyEntryDetails = ({root, navigation}) => {
  const {myEntrySelectedData} = useSelector(state => state.other);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

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
        <MediumText textStyle={styles.itemId}>{question}</MediumText>
        <MediumText textStyle={styles.itemSubmitedOnKey}>{answer}</MediumText>
      </View>
    </View>
  );
  const images = [
    Images.splash,
    'https://source.unsplash.com/1024x768/?nature',
    'https://source.unsplash.com/1024x768/?water',
    'https://source.unsplash.com/1024x768/?girl',
    'https://source.unsplash.com/1024x768/?tree', // Network image
    Images.splash,
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <RenderDetails />
          {myEntrySelectedData?.item?.images && (
            <SliderBox
              images={myEntrySelectedData.item.images}
              resizeMode={'stretch'}
              sliderBoxHeight={250}
              onCurrentImagePressed={index =>
                console.warn(`image ${index} pressed`)
              }
              autoplay={true}
              ImageComponentStyle={{}}
            />
          )}
          <RenderQuestionAnswer
            question={Languages.wharAreYouDoingHere}
            answer={`${Languages.answer} ${myEntrySelectedData.item.whatAreYouDoingHere}`}
          />
          <RenderQuestionAnswer
            question={Languages.cynobatrialBloom}
            answer={`${Languages.answer}  ${myEntrySelectedData.item.cynobatrial}`}
          />
          <RenderQuestionAnswer
            question={Languages.substrate}
            answer={`${Languages.answer} ${myEntrySelectedData.item.substrate}`}
          />
          <RenderQuestionAnswer
            question={Languages.weaterConditions}
            answer={`${Languages.answer} ${myEntrySelectedData.item.waterConditions}`}
          />

          <View style={styles.buttonContainerStyle}>
            {(myEntrySelectedData.tabChangeIndex === 0 ||
              myEntrySelectedData.tabChangeIndex === 2) &&
              user.role !== 'Public Testers' && (
                <SolidButton
                  buttonStyle={styles.buttonStyle}
                  title={Languages.approve}
                  onPress={() =>
                    onPressApproveReject('Approved', Languages.sureAprove)
                  }
                />
              )}
            {(myEntrySelectedData.tabChangeIndex === 0 ||
              myEntrySelectedData.tabChangeIndex === 1) &&
              user.role !== 'Public Testers' && (
                <SolidButton
                  buttonStyle={styles.buttonStyle}
                  title={Languages.reject}
                  onPress={() =>
                    onPressApproveReject('Rejected', Languages.sureReject)
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
