import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
// import { Container, Content } from 'native-base';
import {Languages, Images, Colors} from '@common';
import {SolidButton} from '@Buttons';
import {RegularText, XLText, TextWithImage, MediumText} from '@Typography';
import styles from './styles';
import UserActions from '../../Redux/User/reducer';
import TextField from '../../Components/TextField';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import MultipleImagePicker from '@baronha/react-native-multiple-image-picker';
import RadioButtonList from '../../Components/RadioButtonList';
import OtherActions from '../../Redux/Other/reducer';

const QuestionAndAnswer = ({navigation}) => {
  const user = useSelector(state => state.user);
  const other = useSelector(state => state.other);

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
    console.log('.other.submitReportData', other.submitReportData);

    const res = new FormData();

    other.submitReportData.imageData.forEach(file=>{
      res.append('res[]', file);
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
      <View style={styles.container}>
        <View style={styles.headingContainer}>
          <XLText
            textStyle={
              styles.headingText
            }>{`${Languages.selectQAndAnswer}`}</XLText>
        </View>

        <View style={styles.questionContainer1}>
          <MediumText textStyle={styles.questionText}>
            {Languages.wharAreYouDoingHere}
          </MediumText>
          <RadioButtonList
            labels={dataRadioWhatAreYouDoing}
            currentSelected={whatAreYouDoingSelectedItem}
            onPress={index => setWhatAreYouDoingSelectedItem(index)}
            dataType="array"
            radioContainerStyle={styles.radioContainerStyle}
            listItemStyle={styles.listItemStyle}
            listItemCheckBoxStyle={styles.listItemCheckBoxStyle}
          />
        </View>
        <View style={styles.questionContainer}>
          <MediumText textStyle={styles.questionText}>
            {Languages.cynobatrialBloom}
          </MediumText>
          <View style={styles.radioContainer}>
            <RadioButtonList
              labels={dataRadioCynobacteria}
              currentSelected={cynobacteriaSelectedItem}
              onPress={index => setCynobacteriaSelectedItem(index)}
              dataType="array"
            />
          </View>
        </View>
        <View style={styles.questionContainer}>
          <MediumText textStyle={styles.questionText}>
            {Languages.substrate}
          </MediumText>
          <View style={styles.radioContainer}>
            <RadioButtonList
              labels={dataRadioSubstract}
              currentSelected={substrateSelectedItem}
              onPress={index => setSubstrateSelectedItem(index)}
              dataType="array"
            />
          </View>
        </View>
        <View style={styles.questionContainer}>
          <MediumText textStyle={styles.questionText}>
            {Languages.weaterConditions}
          </MediumText>
          <View style={styles.radioContainer}>
            <RadioButtonList
              labels={dataRadioWeather}
              currentSelected={weatherSelectedItem}
              onPress={index => setWeatherSelectedItem(index)}
              dataType="array"
              radioContainerStyle={styles.radioContainerStyle}
              listItemStyle={styles.listItemStyle}
            />
          </View>
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
      </View>
    </SafeAreaView>
  );
};
export default QuestionAndAnswer;
