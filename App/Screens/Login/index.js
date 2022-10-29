import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, SafeAreaView, TouchableOpacity} from 'react-native';
import {Languages, Fonts} from '@common';
import {SolidButton} from '@Buttons';
import {CustomText} from '@Typography';
import styles from './styles';
import UserActions from '../../Redux/User/reducer';
import TextField from '../../Components/TextField';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import microValidator from 'micro-validator';
import is from 'is_js';
import Colors from '../../Common/Colors';
import Header from '../../Components/Header/Header';

const Login = ({navigation}) => {
  const user = useSelector(state => state.user);

  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [showPass, setShowPass] = useState(false);
  const dispatch = useDispatch();

  const onPressLogin = () => {
    const error = microValidator.validate(validationSchema, formData);
    if (!is.empty(error)) {
      setErrors(error);
      return;
    }
    dispatch(UserActions.login({...formData, language: user.language}));
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
    password: {
      required: {
        errorMsg: Languages.pwdReqError,
      },
    },
  };

  const handleChange = (key, text) => {
    formData[key] = text;
    setFormData(formData);
    setErrors({});
  };

  const onPressRegistration = navigateName => {
    navigation.navigate(navigateName);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView keyboardShouldPersistTaps="always">
        <View style={styles.innerContainer}>
          <Header
            title={Languages.signin}
            onBackPress={() => navigation.goBack()}
          />
          <View style={styles.inputContainer}>
            <TextField
              keyboardType="email-address"
              headingText={Languages.enterEmailID}
              placeholder={Languages.enterEmail}
              onChangeText={text => handleChange('email', text)}
              value={formData.email}
              error={errors.email && errors.email[0]}
              borderColor={Colors.transparent}
              showRightButton
              rightIcon="email"
            />
            <TextField
              placeholder={Languages.enterPass}
              borderColor={Colors.transparent}
              secureTextEntry={!showPass}
              headingText={Languages.enterPassword}
              onChangeText={text => handleChange('password', text)}
              value={formData.password}
              error={errors.password && errors.password[0]}
              showRightButton
              rightIcon={showPass ? 'eye-off' : 'eye'}
              onPressRightIcon={() => setShowPass(show => !show)}
            />
            <TouchableOpacity
              onPress={() => onPressRegistration('ForgotPassword')}>
              <CustomText
                title={Languages.forgotPassword}
                bold
                size={Fonts.size.small}
                extraStyles={{textAlign: 'right'}}
              />
            </TouchableOpacity>
          </View>

          <SolidButton
            buttonStyle={styles.submit}
            title={Languages.signin}
            onPress={onPressLogin}
          />
          <View style={styles.newUserContainer}>
            <CustomText title={`${Languages.newUser} `} />
            <TouchableOpacity
              onPress={() => onPressRegistration('Registration')}>
              <CustomText
                title={Languages.signup}
                bold
                extraStyles={{textDecorationLine: 'underline'}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
export default Login;
