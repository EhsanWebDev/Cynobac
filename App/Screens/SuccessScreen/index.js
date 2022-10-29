import React from 'react';
import {StyleSheet, SafeAreaView, View} from 'react-native';
import {CustomText} from '@Typography';
import {Icon} from 'react-native-elements';
import Colors from '../../Common/Colors';
import {SolidButton} from '@Buttons';

const SuccessScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <View
          style={{
            backgroundColor: Colors.green,
            width: 100,
            height: 100,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 24,
          }}>
          <Icon name="check" color={Colors.white} size={42} />
        </View>

        <CustomText
          bold
          size={21}
          title={`Thank you for your\n submission!`}
          extraStyles={{textAlign: 'center'}}
        />
      </View>
      <SolidButton
        title={'Done'}
        buttonStyle={{marginHorizontal: 20, marginVertical: 20}}
        onPress={() => navigation.navigate('MyEntry', {fromDone: true})}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});
export default SuccessScreen;
