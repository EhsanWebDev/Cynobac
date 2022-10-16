import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
// import { Container, Content } from 'native-base';
import {Languages, Images, Colors} from '@common';
import {SolidButton} from '@Buttons';
import {RegularText, XLText, TextWithImage, MediumText} from '@Typography';
import styles from './styles';
import UserActions from '../../Redux/User/reducer';
import TextField from '../../Components/TextField';
import MultipleImagePicker from '@baronha/react-native-multiple-image-picker';
import OtherActions from '../../Redux/Other/reducer';

const UploadImages = ({navigation}) => {
  const other = useSelector(state => state.other);

  const [modalVisible, setModalVisible] = useState(false);
  const [otpValue, setOtpValue] = useState();
  const [imageData, setImageData] = useState([]);
  const dispatch = useDispatch();
  const onPressOtp = () => {
    setModalVisible(true);
  };
  useEffect(() => {
    console.log('sub', other.submitReportData);
  }, [other]);
  let defaultOptions = {
    //**iOS**//
    usedPrefetch: false,
    allowedAlbumCloudShared: false,
    muteAudio: true,
    autoPlay: true,
    //resize thumbnail
    haveThumbnail: true,
    // thumbnailWidth: Math.round(width / 2),
    // thumbnailHeight: Math.round(height / 2),
    allowedLivePhotos: true,
    preventAutomaticLimitedAccessAlert: true, // newest iOS 14
    emptyMessage: 'No albums',
    selectedColor: '#30475e',
    maximumMessageTitle: 'Notification',
    maximumMessage: 'You have selected the maximum number of media allowed',
    messageTitleButton: 'OK',
    cancelTitle: 'Cancel',
    tapHereToChange: 'Tap here to change',
    //****//
    //**Android**//
    //****//
    //**Both**//
    usedCameraButton: true,
    allowedVideo: false,
    allowedPhotograph: true, // for camera : allow this option when you want to take a photos
    allowedVideoRecording: false, //for camera : allow this option when you want to recording video.
    maxVideoDuration: 0, //for camera : max video recording duration
    numberOfColumn: 3,
    maxSelectedAssets: 4,
    singleSelectedMode: false,
    doneTitle: 'Done',
    isPreview: true,
    mediaType: 'image',
    isExportThumbnail: false,
    //****//
    // fetchOption: Object,
    // fetchCollectionOption: Object,
    // emptyImage: Image,
  };
  const onPressSubmit = async () => {
    const res = new FormData();
    res.append('res', imageData);
    dispatch(
      OtherActions.setSubmitReportData({
        ...other.submitReportData,
        imageData,
      }),
    );
    navigation.navigate('QuestionAndAnswer');
  };
  const onPressPickImage = async () => {
    const imageResponse = await MultipleImagePicker.openPicker(defaultOptions);
    const imaged = [];
    imageResponse.map(item => {
      console.log('item', item);
      imaged.push({
        uri: item.path,
        name: 'image.jpg', 
        type: 'image/jpeg'
        // name: item.fileName,
        // full_path: item.path,
        // type: item.type,
        // tmp_name: item.fileName,
        // size: item.size,
      });
    });
    setImageData(imaged);
    console.log('response', imageResponse);
  };
  const Item = ({item}) => (
    <View style={styles.listItem}>
      <Image
        style={styles.listImage}
        source={{
          uri: item.uri,
        }}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={onPressPickImage}
          style={styles.headingContainer}>
          <XLText
            textStyle={
              styles.headingText
            }>{`${Languages.clickUploadImage}`}</XLText>
        </TouchableOpacity>
        {imageData.length > 0 && (
          <View style={styles.flatListMainContainer}>
            <FlatList
              data={imageData}
              renderItem={({item}) => <Item item={item} />}
              keyExtractor={item => item.id}
              extraData={imageData}
            />
            {/* <View style={styles.headerContainer}> */}

            <SolidButton
              buttonStyle={styles.submit}
              title={Languages.submit}
              onPress={onPressSubmit}
            />
            {/* </View> */}
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};
export default UploadImages;
