import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TouchableOpacity,
  Pressable,
  Platform,
} from 'react-native';
import {Languages, Images, Colors} from '@common';
import {SolidButton} from '@Buttons';
import {RegularText, XXLText, TextWithImage, CustomText} from '@Typography';
import styles from './styles';
import UserActions from '../../Redux/User/reducer';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Icon} from 'react-native-elements';
import Swiper from 'react-native-swiper';
import {
  OnboardingFirstImg,
  OnboardingSecondImg,
  OnboardingThirdImg,
} from '../../../assets/SVGs';

const LoginRegistration = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [otpValue, setOtpValue] = useState();
  const [deviceToken, setDeviceToken] = useState();
  const dispatch = useDispatch();
  const onPressOtp = () => {
    setModalVisible(true);
  };
  // useEffect(() => {
  //   Languages.setLanguage('fr');
  // }, []);
  const onPressButton = nav => {
    navigation.navigate(nav);
  };
  const onPressRegistration = () => {
    navigation.navigate('Registration');
  };
  const swiperRef = useRef();
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <Swiper
        ref={swiperRef}
        onIndexChanged={index => setSlideIndex(index)}
        loop={false}
        style={styles.wrapper}
        activeDotStyle={styles.activeDotStyles}>
        <View style={styles.slide1}>
          <OnboardingFirstImg />
          <View style={styles.slideText}>
            <CustomText
              title={Languages.slide1Heading}
              bold
              size={24}
              extraStyle={styles.text}
            />
            <CustomText
              title={Languages.slide1SubText}
              extraStyles={[styles.text, styles.slideSubText]}
            />
          </View>
        </View>
        <View style={styles.slide2}>
          <OnboardingSecondImg />

          <View style={styles.slideText}>
            <CustomText
              title={Languages.slide2Heading}
              bold
              size={24}
              extraStyle={styles.text}
            />
            <CustomText
              title={Languages.slide2SubText}
              extraStyles={[styles.text, styles.slideSubText]}
            />
          </View>
        </View>
        <View style={styles.slide3}>
          <OnboardingThirdImg />
          <View style={styles.slideText}>
            <CustomText
              title={Languages.slide3Heading}
              bold
              size={24}
              extraStyle={styles.text}
            />
            <CustomText
              title={Languages.slide3SubText}
              extraStyles={[styles.text, styles.slideSubText]}
            />
          </View>
        </View>
      </Swiper>
      <TextWithImage
        source={Images.forwardArrowWhite}
        onPress={() => onPressButton('ContactUs')}>
        {Languages.contactUs}
      </TextWithImage>
      {slideIndex === 2 ? (
        <View style={styles.slideButtonContainer}>
          <SolidButton
            buttonStyle={styles.submit}
            title={Languages.signup}
            onPress={() => onPressButton('Registration')}
          />
          <SolidButton
            buttonStyle={[styles.submit]}
            outlined
            title={Languages.signin}
            onPress={() => onPressButton('Login')}
          />
        </View>
      ) : (
        <View style={styles.continueButton}>
          <SolidButton
            title={Languages.continue}
            onPress={() => swiperRef?.current?.scrollTo(slideIndex + 1)}
          />
        </View>
      )}
      <TouchableOpacity
        style={styles.skipButton}
        onPress={() => onPressButton('Login')}>
        <CustomText title="Skip" />
      </TouchableOpacity>

      {/* <View style={styles.container}>
        <View style={styles.headingContainer}>
          <XXLText textStyle={styles.heading}>{Languages.cynobac}</XXLText>
        </View>

        <View style={styles.buttonContainer}>
          <SolidButton
            title={Languages.login}
            textStyle={styles.buttonText}
            buttonStyle={styles.buttonLogin}
            onPress={() => onPressButton('Login')}
          />
          <SolidButton
            title={Languages.createNewAccount}
            buttonStyle={styles.buttonRegistration}
            onPress={() => onPressButton('Registration')}
          />
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Settings', {
                previousScreen: 'LoginRegistration',
              })
            }>
            <Icon
              containerStyle={styles.languageIcon}
              type="material"
              name="translate"
              color={Colors.white}
              size={35}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.footerContainer}>
          <TextWithImage
            source={Images.forwardArrowWhite}
            onPress={() => onPressButton('ContactUs')}>
            {Languages.contactUs}
          </TextWithImage>
          <TextWithImage
            containerStyle={styles.textContainerStyle}
            source={Images.forwardArrowWhite}>
            {Languages.faq}
          </TextWithImage>
        </View>
      </View> */}
    </SafeAreaView>
  );
};
export default LoginRegistration;
