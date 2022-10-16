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
import RadioButtonList from '../../Components/RadioButtonList';
import DatePickerModal from '.././../Components/DatePickerModal';
import moment from 'moment';
import microValidator from 'micro-validator';
import is from 'is_js';

const ChangePassword = ({navigation}) => {
  const user = useSelector(state => state.user);

  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const onPressSubmit = () => {
    const error = microValidator.validate(validationSchema, formData);
    if (!is.empty(error)) {
      setErrors(error);
      return;
    }
    const newData = {
      ...formData,
      language: user.language,
    };
    dispatch(UserActions.changePassword(newData));
  };

  const validationSchema = {
    oldpassword: {
      required: {
        errorMsg: Languages.oldPwdReqError,
      },
    },
    password: {
      required: {
        errorMsg: Languages.pwdReqError,
      },
    },
    reenterPassword: {
      required: {
        errorMsg: Languages.reenterPwdReqError,
      },
      equals: {
        to: formData.password, // you can pass anything here for e.g. variables
        errorMsg: Languages.reenterPwdNoMatchError,
      },
    },
  };
  const handleChange = (key, text) => {
    if (key === 'dob') {
      text = moment(text).format('YYYY-MM-DD');
    }
    formData[key] = text;
    setFormData(formData);
    setErrors({});
  };


  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={styles.container}>
        <TextField
            secureTextEntry
            headingText={Languages.oldPassword}
            onChangeText={text => handleChange('oldpassword', text)}
            value={formData.oldpassword}
            error={errors.oldpassword && errors.oldpassword[0]}
          />
          <TextField
            secureTextEntry
            headingText={Languages.password}
            onChangeText={text => handleChange('password', text)}
            value={formData.password}
            error={errors.password && errors.password[0]}
          />
          <TextField
            secureTextEntry
            headingText={Languages.reenterPassword}
            onChangeText={text => handleChange('reenterPassword', text)}
            value={formData.reenterPassword}
            error={errors.reenterPassword && errors.reenterPassword[0]}
          />
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
export default ChangePassword;
