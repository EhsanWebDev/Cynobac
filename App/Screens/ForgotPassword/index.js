import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
// import { Container, Content } from 'native-base';
import {Languages, Images} from '@common';
import {SolidButton} from '@Buttons';
import {RegularText, XLText, TextWithImage, MediumText} from '@Typography';
import styles from './styles';
import UserActions from '../../Redux/User/reducer';
import TextField from '../../Components/TextField';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import microValidator from 'micro-validator';
import is from 'is_js';
import Header from '../../Components/Header/Header';

const ForgotPassword = ({navigation}) => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const onPressSubmit = () => {
    console.log('formData', formData);
    const error = microValidator.validate(validationSchema, formData);
    if (!is.empty(error)) {
      setErrors(error);
      return;
    }
    dispatch(
      UserActions.forgotPassword({...formData, language: user.language}),
    );
  };

  const validationSchema = {
    email: {
      required: {
        errorMsg: Languages.emailReqError,
      },
      email: {
        errorMsg: Languages.emailInvalidError,
      },
    },
  };

  const handleChange = (key, text) => {
    formData[key] = text;
    setFormData(formData);
    setErrors({});
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={styles.innerContainer}>
          <Header
            title={Languages.forgotPassword}
            onBackPress={() => navigation.goBack()}
          />
          <View style={styles.inputContainer}>
            <TextField
              headingText={Languages.enterEmailID}
              placeHolder={Languages.enterEmail}
              onChangeText={text => handleChange('email', text)}
              value={formData.email}
              error={errors.email && errors.email[0]}
              showRightButton
              rightIcon="email"
            />
          </View>

          <SolidButton
            buttonStyle={styles.submit}
            title={Languages.submit}
            onPress={onPressSubmit}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
export default ForgotPassword;
