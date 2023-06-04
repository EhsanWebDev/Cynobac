import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, SafeAreaView, Alert, TouchableOpacity} from 'react-native';

import {Languages, Colors} from '@common';
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
import {Icon} from 'react-native-elements';
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
  const [showMap, setShowMap] = useState(true);

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
      error => {
        console.log({error});
        const {code} = error;
        if (code === 2) {
          Alert.alert(
            'Error while getting location',
            'Please turn on location from setting',
          );
          return;
        }
        Alert.alert('Error', JSON.stringify(error));
      },
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

  const onPressChange = () => {
    setShowMap(false);
    // setUsePlacesAddress(true);
    // Geolocation.getCurrentPosition(
    //   info => {
    //     const {latitude, longitude} = info.coords;
    //     setPosition({
    //       latitude: latitude,
    //       longitude: longitude,
    //       latitudeDelta: 0.009,
    //       longitudeDelta: 0.009,
    //     });
    //     Geocoder.from(latitude, longitude)
    //       .then(json => {
    //         console.log({json});
    //         var addressValue = json.results[0].formatted_address;
    //         setAddress(addressValue);
    //       })
    //       .catch(error => console.log(error));
    //   },
    //   error => Alert.alert('Error', JSON.stringify(error)),
    //   // {
    //   //   enableHighAccuracy: true,
    //   //   timeout: 10000,
    //   //   maximumAge: 10000,
    //   // },
    // );
  };
  const getMyLocation = () => {
    Geolocation.getCurrentPosition(
      info => {
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
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginTop: 20, marginBottom: 26, marginHorizontal: 20}}>
        <Header
          onBackPress={() => navigation.navigate('home')}
          title="Select your location"
        />
      </View>

      <View style={styles.container}>
        {showMap ? (
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.mapViewStyle}
            region={position}>
            <Marker
              coordinate={position}
              draggable
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
        ) : (
          <View style={styles.autocompleteContainer}>
            <GooglePlacesAutocomplete
              currentLocation
              textInputProps={{
                // value: address,
                placeholderTextColor: Colors.lightGray,
                returnKeyType: 'search',
                borderWidth: 1,
                borderColor: 'gray',
              }}
              placeholder={Languages.locateMyLocation}
              fetchDetails
              onPress={(data, details = null) => {
                setAddress(details.formatted_address);
                setPosition({
                  latitude: details.geometry.location.lat,
                  longitude: details.geometry.location.lng,
                  latitudeDelta: 0.009,
                  longitudeDelta: 0.009,
                });
                setShowMap(true);
              }}
              query={{
                key: 'AIzaSyA5dnMHxWSak2yswhuIVLOqyiJhUomHkC0',
                language: user.language,
              }}
              styles={{
                description: {
                  color: 'gray',
                },
                textInput: {
                  height: 45,
                  color: Colors.black,
                },
              }}
              onFail={error => console.error('errorPlace', error)}
            />
          </View>
        )}
        <TouchableOpacity
          onPress={getMyLocation}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
            marginTop: 8,
            marginRight: 20,
          }}>
          <CustomText
            size={14}
            title="Use my location"
            extraStyles={{marginRight: 4}}
          />
          <Icon name="my-location" color={Colors.green} size={18} />
        </TouchableOpacity>
        {address && (
          <View
            style={{
              flex: 0.38,
              marginHorizontal: 20,
              justifyContent: 'flex-end',
              paddingBottom: 12,
              marginTop: 12,
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
                marginBottom: 16,
                marginTop: 4,
              }}>
              <CustomText extraStyles={{flex: 0.75}} title={address} />
              <TouchableOpacity
                style={{flex: 0.25, alignItems: 'flex-end'}}
                onPress={onPressChange}>
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
