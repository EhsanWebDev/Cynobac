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
} from 'react-native';
// import { Container, Content } from 'native-base';
import {Languages, Images, Colors} from '@common';
import {SolidButton} from '@Buttons';
import {RegularText, XLText, TextWithImage, MediumText} from '@Typography';
import styles from './styles';
import MapView from 'react-native-maps';
import {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Geolocation from '@react-native-community/geolocation';
// import Geolocation from 'react-native-geolocation-service';
import OtherActions from '../../Redux/Other/reducer';
import Geocoder from 'react-native-geocoding';

const SubmitReport = ({navigation}) => {
  const user = useSelector(state => state.user);

  const [position, setPosition] = useState({
    latitude: 37.42195,
    longitude: -122.04,
    latitudeDelta: 0.009,
    longitudeDelta: 0.009,
  });
  const [address, setAddress] = useState();
  const other = useSelector(state => state.other);
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    dispatch(OtherActions.setSubmitReportData({}));
    Geocoder.init('AIzaSyA5dnMHxWSak2yswhuIVLOqyiJhUomHkC0');

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
            // var addressComponent = json.results[0].address_components[0];
            var addressValue = json.results[0].formatted_address;
            setAddress(addressValue);
            console.log(addressValue);
            console.log(json);
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
  }, [dispatch]);

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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.autocompleteContainer}>
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
        </View>
        <MapView
          provider={PROVIDER_GOOGLE}
          // showsUserLocation={true}
          mapType={'satellite'}
          style={styles.mapViewStyle}
          region={position}
          // initialRegion={position}
          // currentLocation={true}
          // showsMyLocationButton={true}
        >
          <Marker coordinate={position} />
        </MapView>
        {address && (
          <SolidButton
            buttonStyle={styles.submit}
            title={Languages.submit}
            onPress={onPressSubmit}
          />
        )}
      </View>
    </SafeAreaView>
  );
};
export default SubmitReport;
