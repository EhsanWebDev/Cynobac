import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, SafeAreaView, TouchableOpacity} from 'react-native';
import {Languages, Colors} from '@common';
import {SolidButton} from '@Buttons';
import {XLText, TextWithImage, MediumText, CustomText} from '@Typography';
import styles from './styles';
import UserActions from '../../Redux/User/reducer';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import microValidator from 'micro-validator';
import is from 'is_js';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import Fonts from '../../Common/Fonts';
import Header from '../../Components/Header/Header';

const EmailVerification = ({navigation}) => {
  const user = useSelector(state => state.user);
  const {email} = user || {};
  console.log({user});

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const onPressSubmit = () => {
    const error = microValidator.validate(validationSchema, formData);
    if (!is.empty(error)) {
      setErrors(error);
      return;
    }
    console.log('formData', formData);

    dispatch(UserActions.verifyEmail({...formData, language: user.language}));
    // navigation.navigate('Home');
  };
  const onPressResend = () => {
    dispatch(UserActions.resendVerifyEmail({language: user.language}));
  };

  const validationSchema = {
    code: {
      required: {
        errorMsg: Languages.verificationCodeError,
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
            title={Languages.emailVerificationCode}
            onBackPress={() => navigation.goBack()}
          />
          <View style={styles.sentEmailText}>
            <CustomText
              title={`We sent the verification code to ${email}`}
              color={Colors.primaryTextMuted}
              extraStyles={{textAlign: 'center'}}
            />
          </View>

          <View style={styles.inputContainer}>
            <OTPInputView
              codeInputFieldStyle={styles.maskInput}
              pinCount={6}
              onCodeChanged={code => handleChange('code', code)}
            />
            {errors?.code && (
              <CustomText
                title={errors.code[0]}
                color={Colors.red}
                size={Fonts.size.small}
              />
            )}
          </View>

          <View style={styles.dontReciveContainer}>
            <CustomText title={`${Languages.dontReceived} `} />
            <TouchableOpacity onPress={onPressResend}>
              <CustomText
                title={Languages.resend}
                bold
                extraStyles={{textDecorationLine: 'underline'}}
              />
            </TouchableOpacity>
          </View>

          {/* <TextField
            headingText={Languages.enterEmailVerificationCode}
            //  placeHolder={Languages.enterOtp}
            onChangeText={text => handleChange('code', text)}
            value={formData.code}
            error={errors.code && errors.code[0]}
          /> */}

          <SolidButton
            buttonStyle={styles.submit}
            title={Languages.verifyAndCreateAcc}
            onPress={onPressSubmit}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
export default EmailVerification;
