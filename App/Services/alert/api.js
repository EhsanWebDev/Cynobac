import {Alert} from 'react-native';

export const alert = async (text) => {
  Alert.alert(text);
};

export const confirm = async (text,okButton,cancelButton) => {
  const res = await new Promise((resolve) => {
    Alert.alert(text, '', [
      {text: okButton, onPress: () => resolve(true)},
      {text: cancelButton, style: 'cancel', onPress: () => resolve(false)},
    ]);
  });

  return res;
};

export const confirmOkay = async (text,okButton) => {
  const res = await new Promise((resolve) => {
    Alert.alert(text, '', [
      {text: okButton, onPress: () => resolve(true)},
    ]);
  });

  return res;
};

