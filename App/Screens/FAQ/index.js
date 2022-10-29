import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, View, TouchableOpacity} from 'react-native';
import Header from '../../Components/Header/Header';
import styles from './styles';
import {CustomText} from '@Typography';
import {Icon} from 'react-native-elements';
import Colors from '../../Common/Colors';
import ExpendableItem from '../../Components/ExpendableItem/ExpendableItem';

const FAQ = ({navigation}) => {
  const [expended, setExpended] = useState(false);
  const [expendedTwo, setExpendedTwo] = useState(false);
  const [expendedThree, setExpendedThree] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Header onBackPress={navigation.goBack} title="FAQ" />
      </View>
      <View>
        <View style={{alignItems: 'center'}}>
          <CustomText
            title={`Key questions and answers
             about Cynobac`}
          />
        </View>

        <ExpendableItem
          expended={expended}
          onPress={() => setExpended(!expended)}
          questionCount={1}
          description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis amet, amet sapien adipiscing mi interdum sit vitae diam.`}
        />
        <ExpendableItem
          expended={expendedTwo}
          onPress={() => setExpendedTwo(!expendedTwo)}
          questionCount={2}
          description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis amet, amet sapien adipiscing mi interdum sit vitae diam.`}
        />
        <ExpendableItem
          expended={expendedThree}
          onPress={() => setExpendedThree(!expendedThree)}
          questionCount={3}
          description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis amet, amet sapien adipiscing mi interdum sit vitae diam.`}
        />
      </View>
    </SafeAreaView>
  );
};

export default FAQ;
