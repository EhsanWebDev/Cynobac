import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  NativeModules,
  DevSettings,
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
import RadioButtonList from '../../Components/RadioButtonList';

const Settings = ({route, navigation}) => {
  const user = useSelector(state => state.user);

  const [selectedLanguage, setSelectedLanguage] = useState();
  const dispatch = useDispatch();
  const dataRadioLanguage = [
    Languages.french,
    Languages.english,
    Languages.italian,
    Languages.german,
  ];
  useEffect(() => {
    // console.log('hello world', user.language);
    // Languages.setLanguage(user.language);
    var value = 0;
    if (user.language === 'fr') {
      value = 0;
    } else if (user.language === 'en') {
      value = 1;
    } else if (user.language === 'it') {
      value = 2;
    } else {
      value = 3;
    }

    setSelectedLanguage(value);
  }, [user, user.language]);
  const onLanguageSelect = index => {
    setSelectedLanguage(index);
    if (index === 0) {
      dispatch(UserActions.setLanguage('fr'));
      Languages.setLanguage('fr');
    } else if (index === 1) {
      dispatch(UserActions.setLanguage('en'));
      Languages.setLanguage('en');
    } else if (index === 2) {
      dispatch(UserActions.setLanguage('it'));
      Languages.setLanguage('it');
    } else {
      dispatch(UserActions.setLanguage('de'));
      Languages.setLanguage('de');
    }
    // console.log('navigation', navigation);

    // console.log('navigation', route);

    navigation.reset({
      index: 0,
      routes: [
        {
          name:
            route.params && route.params.previousScreen
              ? route.params.previousScreen
              : 'Home',
        },
      ],
    });
    // setTimeout(() => {
    //   NativeModules.DevSettings.reload();
    // }, 1000);
  };

  // const onPressEnglish = () => {
  //   Languages.setLanguage("en");
  //   callClinicApi();
  // };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.headingContainer}>
          <XLText
            textStyle={
              styles.headingText
            }>{`${Languages.selectLanguage}`}</XLText>
        </View>
        <View style={styles.radioContainer}>
          <RadioButtonList
            radioContainerStyle={styles.radioContainerStyle}
            listItemStyle={styles.listItemStyle}
            labels={dataRadioLanguage}
            currentSelected={selectedLanguage}
            onPress={index => onLanguageSelect(index)}
            dataType="array"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Settings;
