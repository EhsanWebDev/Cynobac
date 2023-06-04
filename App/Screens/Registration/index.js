import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, SafeAreaView, TouchableOpacity} from 'react-native';
import {Languages} from '@common';
import {SolidButton} from '@Buttons';
import {CustomText} from '@Typography';
import styles from './styles';
import UserActions from '../../Redux/User/reducer';
import TextField from '../../Components/TextField';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import RadioButtonList from '../../Components/RadioButtonList';
import DatePickerModal from '.././../Components/DatePickerModal';
import moment from 'moment';
import microValidator from 'micro-validator';
import is from 'is_js';
import Header from '../../Components/Header/Header';

const dataGender = [Languages.male, Languages.female, Languages.other];
const Registration = ({navigation}) => {
  const user = useSelector(state => state.user);
  const [selectedGender, setSelectedGender] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [showRepeatPass, setShowRepeatPass] = useState(false);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const onPressLogin = () => {
    navigation.navigate('Login');
  };
  const onPressSubmit = () => {
    const error = microValidator.validate(validationSchema, formData);

    if (!is.empty(error)) {
      setErrors(error);
      return;
    }
    const newData = {
      ...formData,
      language: user.language,
      gender: dataGender[selectedGender],
      name: `${formData.firstname} ${formData.lastname}`,
    };
    // console.log('newData', newData);

    dispatch(UserActions.registration(newData));
    // navigation.navigate('EmailVerification');
  };

  const validationSchema = {
    firstname: {
      required: {
        errorMsg: Languages.firstName,
      },
    },
    lastname: {
      required: {
        errorMsg: Languages.lastName,
      },
    },
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
    phone: {
      required: {
        errorMsg: Languages.mobileNoError,
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
    address: {
      required: {
        errorMsg: Languages.addressError,
      },
    },
    city: {
      required: {
        errorMsg: Languages.cityError,
      },
    },
    zipcode: {
      required: {
        errorMsg: Languages.zipError,
      },
    },
    job: {
      required: {
        errorMsg: Languages.jobError,
      },
    },
  };
  const onPressSelectedDate = date => {
    var dateFormate = moment(date).format('YYYY-MM-DD');
    setSelectedDob(dateFormate);
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
        <View style={styles.innerContainer}>
          <Header
            title={Languages.createNewAccount}
            onBackPress={() => navigation.goBack()}
          />
          <View style={styles.inputContainer}>
            <TextField
              placeholder={Languages.enterFirstName}
              headingText={Languages.firstName}
              onChangeText={text => handleChange('firstname', text)}
              value={formData.firstname}
              error={errors.firstname && errors.firstname[0]}
            />
            <TextField
              headingText={Languages.lastName}
              placeholder={Languages.enterLastName}
              onChangeText={text => handleChange('lastname', text)}
              value={formData.lastname}
              error={errors.lastname && errors.lastname[0]}
            />
            <View>
              <CustomText
                title={Languages.gender}
                bold
                extraStyles={{marginBottom: 5}}
              />
              <RadioButtonList
                listItemCheckBoxStyle={styles.listItemCheckBoxStyle}
                labels={dataGender}
                radioContainerStyle={styles.radioContainer}
                currentSelected={selectedGender}
                onPress={index => setSelectedGender(index)}
                dataType="array"
              />
            </View>
            <TextField
              keyboardType="email-address"
              placeholder={Languages.enterEmail}
              headingText={Languages.enterEmailID}
              onChangeText={text => handleChange('email', text)}
              value={formData.email}
              error={errors.email && errors.email[0]}
              showRightButton
              rightIcon="email"
            />
            <CustomText
              title={Languages.dob}
              bold
              extraStyles={{marginBottom: 5}}
            />
            <DatePickerModal
              placeholder={Languages.enterDob}
              // setSelectedDate={date => onPressSelectedDate(date)}
              // selectedDate={selectedDob}
              selectedDate={formData.dob}
              setSelectedDate={date => handleChange('dob', date)}
            />
            <TextField
              keyboardType="number-pad"
              headingText={Languages.mobileNo}
              placeholder={Languages.enterNumber}
              onChangeText={text => handleChange('phone', text)}
              value={formData.phone}
              error={errors.phone && errors.phone[0]}
            />
            <TextField
              placeholder={Languages.enterPass}
              secureTextEntry={!showPass}
              headingText={Languages.password}
              onChangeText={text => handleChange('password', text)}
              value={formData.password}
              error={errors.password && errors.password[0]}
              showRightButton
              rightIcon={showPass ? 'eye-off' : 'eye'}
              onPressRightIcon={() => setShowPass(show => !show)}
            />
            <TextField
              placeholder={Languages.reEnterPass}
              secureTextEntry={!showRepeatPass}
              headingText={Languages.reenterPassword}
              onChangeText={text => handleChange('reenterPassword', text)}
              value={formData.reenterPassword}
              error={errors.reenterPassword && errors.reenterPassword[0]}
              showRightButton
              rightIcon={showRepeatPass ? 'eye-off' : 'eye'}
              onPressRightIcon={() => setShowRepeatPass(show => !show)}
            />
            <TextField
              placeholder={Languages.enterJob}
              headingText={Languages.job}
              onChangeText={text => handleChange('job', text)}
              value={formData.job}
              error={errors.job && errors.job[0]}
            />
            <TextField
              placeholder={Languages.enterAddress}
              headingText={Languages.address}
              onChangeText={text => handleChange('address', text)}
              value={formData.address}
              error={errors.address && errors.address[0]}
            />
            <TextField
              placeholder={Languages.enterCity}
              headingText={Languages.city}
              onChangeText={text => handleChange('city', text)}
              value={formData.city}
              error={errors.city && errors.city[0]}
            />
            <TextField
              keyboardType="number-pad"
              placeholder={Languages.enterZip}
              headingText={Languages.zip}
              onChangeText={text => handleChange('zipcode', text)}
              value={formData.zipcode}
              error={errors.zipcode && errors.zipcode[0]}
            />
          </View>

          <SolidButton
            buttonStyle={styles.submit}
            title={Languages.createAccount}
            onPress={onPressSubmit}
          />
          <View style={styles.haveAnContainer}>
            <CustomText title={`${Languages.haveAnAccount} `} />
            <TouchableOpacity onPress={onPressLogin}>
              <CustomText
                title={Languages.signin}
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
export default Registration;
