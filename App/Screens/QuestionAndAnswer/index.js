import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, SafeAreaView, ScrollView} from 'react-native';
import {Languages, Images, Colors} from '@common';
import {SolidButton} from '@Buttons';
import {CustomText} from '@Typography';
import styles from './styles';

import RadioButtonList from '../../Components/RadioButtonList';
import OtherActions from '../../Redux/Other/reducer';
import Header from '../../Components/Header/Header';

const QuestionAndAnswer = ({navigation}) => {
  const user = useSelector(state => state.user);
  const other = useSelector(state => state.other);
  const {submitReportData} = other || {};
  const {imageData} = submitReportData || {};

  const [cynobacteriaSelectedItem, setCynobacteriaSelectedItem] =
    useState(null);
  const [substrateSelectedItem, setSubstrateSelectedItem] = useState(null);
  const [weatherSelectedItem, setWeatherSelectedItem] = useState(null);
  const [whatAreYouDoingSelectedItem, setWhatAreYouDoingSelectedItem] =
    useState(null);

  const dispatch = useDispatch();

  const dataRadioCynobacteria = [Languages.yes, Languages.no];
  const dataRadioSubstract = [Languages.rock, Languages.water];
  const dataRadioWeather = [
    Languages.sun,
    Languages.cloud,
    Languages.wind,
    Languages.rain,
  ];
  const dataRadioWhatAreYouDoing = [
    Languages.walkingDog,
    Languages.haveAWalk,
    Languages.scanningForBlooms,
    Languages.fishing,
    Languages.other,
  ];

  // const dataRadioWeather1 = [Languages.wind, Languages.rain];
  useEffect(() => {
    // console.log('hello world', user.language);
    // Languages.setLanguage(user.language);
  }, [user, user.language]);
  const onPressSubmit = async () => {
    // console.log('.other.submitReportData', other.submitReportData);

    const res = new FormData();

    imageData.forEach(file => {
      res.append('res[]', file, file?.uri);
    });
    // res.append('res[]', other.submitReportData.imageData);
    res.append('address', other.submitReportData.address);
    res.append('latitude', other.submitReportData.latitude);
    res.append('longitude', other.submitReportData.longitude);
    res.append('cynobatrial', dataRadioCynobacteria[cynobacteriaSelectedItem]);
    res.append('substrate', dataRadioSubstract[substrateSelectedItem]);
    res.append('waterConditions', dataRadioWeather[weatherSelectedItem]);
    res.append('language', user.language);
    res.append(
      'whatAreYouDoingHere',
      dataRadioWhatAreYouDoing[whatAreYouDoingSelectedItem],
    );
    dispatch(OtherActions.submitReport(res));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginTop: 20, marginBottom: 26, marginHorizontal: 20}}>
        <Header
          onBackPress={navigation.goBack}
          title={Languages.selectYourAnswers}
        />
      </View>
      <ScrollView>
        <View style={{marginHorizontal: 20}}>
          <CustomText
            title={`Q.1 ${Languages.wharAreYouDoingHere}`}
            bold
            extraStyles={{marginBottom: 5}}
          />
          <RadioButtonList
            listItemCheckBoxStyle={styles.listItemCheckBoxStyle}
            labels={dataRadioWhatAreYouDoing}
            radioContainerStyle={{flexDirection: 'column', marginTop: 12}}
            listItemStyle={{marginBottom: 8}}
            currentSelected={whatAreYouDoingSelectedItem}
            onPress={index => setWhatAreYouDoingSelectedItem(index)}
            dataType="array"
          />
        </View>
        <View style={{marginHorizontal: 20, marginTop: 24}}>
          <CustomText
            title={`Q.2 ${Languages.cynobatrialBloom}`}
            bold
            extraStyles={{marginBottom: 5}}
          />
          <RadioButtonList
            listItemCheckBoxStyle={styles.listItemCheckBoxStyle}
            labels={dataRadioCynobacteria}
            radioContainerStyle={{flexDirection: 'column', marginTop: 12}}
            listItemStyle={{marginBottom: 8}}
            currentSelected={cynobacteriaSelectedItem}
            onPress={index => setCynobacteriaSelectedItem(index)}
            dataType="array"
          />
        </View>
        <View style={{marginHorizontal: 20, marginTop: 24}}>
          <CustomText
            title={`Q.3 ${Languages.substrate}`}
            bold
            extraStyles={{marginBottom: 5}}
          />
          <RadioButtonList
            listItemCheckBoxStyle={styles.listItemCheckBoxStyle}
            labels={dataRadioSubstract}
            radioContainerStyle={{flexDirection: 'column', marginTop: 12}}
            listItemStyle={{marginBottom: 8}}
            currentSelected={substrateSelectedItem}
            onPress={index => setSubstrateSelectedItem(index)}
            dataType="array"
          />
        </View>
        <View style={{marginHorizontal: 20, marginTop: 24}}>
          <CustomText
            title={`Q.4 ${Languages.weaterConditions}`}
            bold
            extraStyles={{marginBottom: 5}}
          />
          <RadioButtonList
            listItemCheckBoxStyle={styles.listItemCheckBoxStyle}
            labels={dataRadioWeather}
            radioContainerStyle={{flexDirection: 'column', marginTop: 12}}
            listItemStyle={{marginBottom: 8}}
            currentSelected={weatherSelectedItem}
            onPress={index => setWeatherSelectedItem(index)}
            dataType="array"
          />
        </View>
        {cynobacteriaSelectedItem !== null &&
          substrateSelectedItem !== null &&
          weatherSelectedItem !== null &&
          whatAreYouDoingSelectedItem !== null && (
            <View style={styles.buttonContainer}>
              <SolidButton
                buttonStyle={styles.submit}
                title={Languages.submit}
                onPress={onPressSubmit}
              />
            </View>
          )}
      </ScrollView>
    </SafeAreaView>
  );
};
export default QuestionAndAnswer;
