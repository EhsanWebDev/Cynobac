import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
} from 'react-native';

import {Languages, Colors} from '@common';
import {SolidButton} from '@Buttons';
import styles from './styles';
import OtherActions from '../../Redux/Other/reducer';
import Header from '../../Components/Header/Header';
import {Icon} from 'react-native-elements';
import ImagePicker from 'react-native-image-crop-picker';
import Modal from 'react-native-modal';
import {randomIntFromInterval} from './helper';

let defaultOptions = {
  compressImageQuality: 0.8,
};

const UploadImages = ({navigation}) => {
  const other = useSelector(state => state.other);
  const [visible, setVisible] = useState(false);
  const [imageData, setImageData] = useState([]);
  const dispatch = useDispatch();

  const close = () => setVisible(false);
  const open = () => setVisible(true);

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
    try {
      setVisible(false);
      const images = await ImagePicker.openPicker({
        multiple: true,
        mediaType: 'photo',
        ...defaultOptions,
      });
      const imaged = [];
      images.map((item, index) => {
        imaged.push({
          uri: item.path,
          name: `image${index}.jpg`,
          type: 'image/jpeg',
        });
      });
      setImageData([...imageData, ...imaged]);
    } catch (error) {}
  };

  const openCamera = () => {
    if ((imageData || []).length > 3) {
      alert('You can upload four images');
      return;
    }
    ImagePicker.openCamera({
      cropping: true,
      ...defaultOptions,
    })
      .then(image => {
        const imageTaken = {
          uri: image.path,
          name: `image${randomIntFromInterval(0, 100)}.jpg`,
          type: 'image/jpeg',
        };
        setImageData([...imageData, imageTaken]);
      })
      .finally(close);
  };

  const openModal = () => {
    // if ((imageData || []).length > 3) {
    //   alert('You can upload four images');
    //   return;
    // }
    open();
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Header onBackPress={navigation.goBack} title="Upload images" />
        </View>
        <ScrollView>
          <View style={[styles.innerContainer]}>
            <TouchableOpacity
              onPress={openModal}
              style={styles.headingContainer}>
              <View>
                <Icon name="add" size={32} color={Colors.primaryText} />
              </View>
            </TouchableOpacity>
            {(imageData || []).map((image, index) => {
              console.log({index});
              return (
                <View key={index} style={{position: 'relative'}}>
                  <Image
                    source={{uri: image.uri}}
                    style={[
                      styles.listImage,
                      {marginLeft: (index + 1) % 3 === 0 ? 0 : 14},
                    ]}
                  />
                  <TouchableOpacity
                    onPress={() => {
                      const updatedImages = imageData.filter(
                        (image, idx) => index !== idx,
                      );
                      setImageData(updatedImages);
                    }}
                    style={{
                      position: 'absolute',
                      top: 10,
                      right: 0,
                      backgroundColor: Colors.lightRed,
                      borderRadius: 12,
                      padding: 4,
                    }}>
                    <Icon name="close" size={12} color={Colors.white} />
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </ScrollView>
        {imageData.length > 0 && (
          <View style={styles.flatListMainContainer}>
            <SolidButton
              buttonStyle={styles.submit}
              title={Languages.continue}
              onPress={onPressSubmit}
            />
          </View>
        )}
      </SafeAreaView>

      <Modal
        isVisible={visible}
        onBackButtonPress={close}
        onBackdropPress={close}
        style={{justifyContent: 'flex-end', margin: 0}}>
        <SafeAreaView style={styles.options}>
          <TouchableOpacity style={styles.option} onPress={onPressPickImage}>
            <Icon name="folder" color={Colors.primaryText} />
            <Text style={{color: Colors.primaryText}}>Library </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option} onPress={openCamera}>
            <Icon name="camera" color={Colors.primaryText} />
            <Text style={{color: Colors.primaryText}}>Camera</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </Modal>
    </>
  );
};
export default UploadImages;
