import React from 'react';
import {useSelector} from 'react-redux';
import {View, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import {Languages, Images, Colors} from '@common';
import {CustomText} from '@Typography';
import styles from './styles';
import {ArrowWithCircle, MenuIcon} from '../../../assets/SVGs';
import {Icon} from 'react-native-elements';

const Home = ({navigation}) => {
  const store = useSelector(store => store);
  const {user} = store || {};

  const onPress = screen => {
    navigation.navigate(screen);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <View style={styles.innerContainer}>
          <TouchableOpacity onPress={() => navigation?.openDrawer()}>
            <MenuIcon color={Colors.primaryText} />
          </TouchableOpacity>

          <View style={styles.headingContainer}>
            <CustomText size={24} bold title={`Hello ${user.firstname},`} />
            <CustomText
              color={Colors.primaryTextMuted}
              title={'Welcome back!'}
            />
          </View>
          <TouchableOpacity
            onPress={() => onPress('SubmitReport')}
            style={styles.submitNewReportContainer}>
            <CustomText
              size={19}
              bold
              title={`Suspecting cyanobacteria?
Submit new data`}
            />
            <View style={{alignItems: 'flex-end'}}>
              <ArrowWithCircle />
            </View>
          </TouchableOpacity>
          <View style={styles.seeAllContainer}>
            <View style={styles.seeAllBar}>
              <CustomText size={19} title="Recently submitted" bold />
              <TouchableOpacity>
                <CustomText title="See all" color={Colors.primaryTextMuted} />
              </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
              <View style={styles.reportItem}>
                <View>
                  <View style={styles.reportItemLabel}>
                    <CustomText size={13} title="ID: 932480" />
                  </View>
                  <TouchableOpacity style={styles.reportItemButton}>
                    <CustomText
                      title={`-77.031456, 38.4567
Sunrise buildin g, Near Roton\nSquare, 23452`}
                    />
                    <Icon
                      name="chevron-right"
                      size={26}
                      color={Colors.primaryTextMuted}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.reportItem}>
                <View>
                  <View style={styles.reportItemLabel}>
                    <CustomText size={13} title="ID: 932480" />
                  </View>
                  <TouchableOpacity style={styles.reportItemButton}>
                    <CustomText
                      title={`-77.031456, 38.4567
Sunrise buildin g, Near Roton\nSquare, 23452`}
                    />
                    <Icon
                      name="chevron-right"
                      size={26}
                      color={Colors.primaryTextMuted}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Home;
