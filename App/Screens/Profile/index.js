import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, SafeAreaView} from 'react-native';
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
const Profile = ({navigation}) => {
  const user = useSelector(state => state.user);

  console.log({user});

  const [selectedGender, setSelectedGender] = useState(false);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const testUser = {
      name: user.name,
      firstname: user.firstname,
      lastname: user.lastname,
      gender: user.gender,
      email: user.email,
      dob: user.dob,
      phone: user.phone,
      job: user.job,
      address: user.address,
      city: user.city,
      zipcode: user.zipcode,
    };
    setFormData(testUser);
    let arraycontainsturtles = dataGender.findIndex(function (item) {
      return item.indexOf(user.gender) !== -1;
    });
    setSelectedGender(arraycontainsturtles);
  }, [user]);

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
    console.log('newData', newData);

    dispatch(UserActions.updateProfile(newData));
    // navigation.navigate('EmailVerification');
  };

  const validationSchema = {
    firstname: {
      required: {
        errorMsg: Languages.firstNameError,
      },
    },
    lastname: {
      required: {
        errorMsg: Languages.lastNameError,
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
    phone: {
      required: {
        errorMsg: Languages.mobileNoError,
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

  const handleChange = (key, text) => {
    if (key === 'dob') {
      text = moment(text).format('YYYY-MM-DD');
    }
    formData[key] = text;
    setFormData(formData);
    setErrors({});
  };

  const reset = () => {
    dispatch(UserActions.resetUser());
    navigation.navigate('LoginRegistration');
  };
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={styles.innerContainer}>
          <Header title="Profile" onBackPress={() => navigation.goBack()} />
          <View style={styles.inputContainer}>
            <TextField
              placeholder={Languages.enterFirstName}
              headingText={Languages.firstName}
              onChangeText={text => handleChange('firstname', text)}
              value={formData.firstname}
              error={errors.firstname && errors.firstname[0]}
            />
            <TextField
              placeholder={Languages.enterLastName}
              headingText={Languages.lastName}
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
              placeholder={Languages.enterEmail}
              keyboardType="email-address"
              headingText={Languages.emailID}
              onChangeText={text => handleChange('email', text)}
              value={formData.email}
              error={errors.email && errors.email[0]}
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
              placeholder={Languages.enterNumber}
              keyboardType="number-pad"
              headingText={Languages.mobileNo}
              onChangeText={text => handleChange('phone', text)}
              value={formData.phone}
              error={errors.phone && errors.phone[0]}
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
              headingText={Languages.city}
              onChangeText={text => handleChange('city', text)}
              value={formData.city}
              error={errors.city && errors.city[0]}
            />
            <TextField
              keyboardType="number-pad"
              headingText={Languages.zip}
              onChangeText={text => handleChange('zipcode', text)}
              value={formData.zipcode}
              error={errors.zipcode && errors.zipcode[0]}
            />

            <SolidButton
              buttonStyle={styles.submit}
              title={Languages.submit}
              onPress={onPressSubmit}
            />
            {/* <View style={styles.bottomContainer}>
              <TouchableOpacity
                onPress={() => onPressChangePassword()}
                style={styles.botttomViewContainer}>
                <RegularText textStyle={styles.bottomText}>
                  {Languages.changePassword}
                </RegularText>
                <Image
                  style={styles.bottomImage}
                  source={Images.forwardArrowGray}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => onPressLogout()}
                style={[styles.botttomViewContainer]}>
                <RegularText textStyle={styles.bottomText}>
                  {Languages.logout}
                </RegularText>
                <Image
                  style={styles.bottomImage}
                  source={Images.forwardArrowGray}
                />
              </TouchableOpacity>
            </View> */}
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
export default Profile;
