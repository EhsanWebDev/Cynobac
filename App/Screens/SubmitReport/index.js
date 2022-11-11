import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  PermissionsAndroid,
  Alert,
  TouchableOpacity,
} from 'react-native';
// import { Container, Content } from 'native-base';
import {Languages, Images, Colors} from '@common';
import {SolidButton} from '@Buttons';
import {
  RegularText,
  XLText,
  TextWithImage,
  MediumText,
  CustomText,
} from '@Typography';
import styles from './styles';
import MapView from 'react-native-maps';
import {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Geolocation from '@react-native-community/geolocation';
// import Geolocation from 'react-native-geolocation-service';
import OtherActions from '../../Redux/Other/reducer';
import Geocoder from 'react-native-geocoding';
import Header from '../../Components/Header/Header';
Geocoder.init('AIzaSyA5dnMHxWSak2yswhuIVLOqyiJhUomHkC0');

const SubmitReport = ({navigation}) => {
  const user = useSelector(state => state.user);

  const [position, setPosition] = useState({
    latitude: 37.42195,
    longitude: -122.04,
    latitudeDelta: 0.009,
    longitudeDelta: 0.009,
  });
  const [address, setAddress] = useState(
    '1600 Amphitheatre Pkwy Building 43, Mountain View, CA 94043, USA',
  );
  const other = useSelector(state => state.other);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(OtherActions.setSubmitReportData({}));

    Geolocation.getCurrentPosition(
      info => {
        console.log('infossss', info);
        const {latitude, longitude} = info.coords;
        setPosition({
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.009,
          longitudeDelta: 0.009,
        });
        Geocoder.from(latitude, longitude)
          .then(json => {
            var addressValue = json.results[0].formatted_address;
            setAddress(addressValue);
          })
          .catch(error => console.log(error));
      },
      error => Alert.alert('Error', JSON.stringify(error)),
      // {
      //   enableHighAccuracy: true,
      //   timeout: 10000,
      //   maximumAge: 10000,
      // },
    );
    // return () => {
    //   Geolocation.clearWatch(id);
    //   Geolocation.stopObserving();
    // };
  }, [navigation, dispatch]);

  const onPressSubmit = () => {
    console.log('position', position);

    dispatch(
      OtherActions.setSubmitReportData({
        latitude: position.latitude,
        longitude: position.latitude,
        address: address,
      }),
    );

    navigation.navigate('UploadImages');
    // setSubmitReportData
  };
  // console.log({address});

  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginTop: 20, marginBottom: 26, marginHorizontal: 20}}>
        <Header onBackPress={navigation.goBack} title="Select your location" />
      </View>

      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          // showsUserLocation={true}
          // mapType={'satellite'}
          showsUserLocation
          showsMyLocationButton
          style={styles.mapViewStyle}
          region={position}
          onUserLocationChange={e => {
            const {nativeEvent} = e || {};
            const {coordinate} = nativeEvent || {};
            const {longitude, latitude} = coordinate || {};
            Geocoder.from(latitude, longitude)
              .then(json => {
                var addressValue = json.results[0].formatted_address;
                setAddress(addressValue);
                console.log({addressValue});
              })
              .catch(error => console.log(error));
          }}
          // initialRegion={position}
          // currentLocation={true}
          // showsMyLocationButton={true}
        >
          <Marker
            coordinate={position}
            onPress={e => {
              const {nativeEvent} = e || {};
              const {coordinate} = nativeEvent || {};
              const {longitude, latitude} = coordinate || {};
              Geocoder.from(latitude, longitude)
                .then(json => {
                  var addressValue = json.results[0].formatted_address;
                  setAddress(addressValue);
                  console.log({addressValue});
                })
                .catch(error => console.log(error));
            }}
          />
        </MapView>
        {/* <View style={styles.autocompleteContainer}>
          <GooglePlacesAutocomplete
            // currentLocation
            textInputProps={{
              // value: address,
              placeholderTextColor: Colors.lightGray,
              returnKeyType: 'search',
            }}
            placeholder={Languages.locateMyLocation}
            fetchDetails={true}
            onPress={(data, details = null) => {
              setAddress(details.formatted_address);
              setPosition({
                latitude: details.geometry.location.lat,
                longitude: details.geometry.location.lng,
                latitudeDelta: 0.009,
                longitudeDelta: 0.009,
              });
              // 'details' is provided when fetchDetails = true
              console.log(data, details);
            }}
            query={{
              key: 'AIzaSyA5dnMHxWSak2yswhuIVLOqyiJhUomHkC0',
              language: user.language,
            }}
            styles={{
              description: {
                color: Colors.lightGray,
              },
              textInput: {
                height: 45,
                color: Colors.black,
              },
            }}
            onFail={error => console.error('errorPlace', error)}
          />
        </View> */}
        {address && (
          <View
            style={{
              flex: 0.32,
              marginHorizontal: 20,
              justifyContent: 'flex-end',
              paddingBottom: 12,
              marginTop: 22,
            }}>
            <CustomText
              title="Your location"
              bold
              color={Colors.primaryTextMuted}
              size={13}
            />
            <View
              style={{
                backgroundColor: Colors.inputBG,
                paddingHorizontal: 16,
                paddingVertical: 13,
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 12,
                marginTop: 4,
              }}>
              <CustomText extraStyles={{flex: 0.75}} title={address} />
              <TouchableOpacity style={{flex: 0.3, alignItems: 'flex-end'}}>
                <CustomText title={'Change'} color={Colors.green} bold />
              </TouchableOpacity>
            </View>
            <SolidButton
              buttonStyle={styles.submit}
              title={Languages.continue}
              onPress={onPressSubmit}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};
export default SubmitReport;
