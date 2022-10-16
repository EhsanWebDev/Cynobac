import React, {Component} from 'react';
import {StyleSheet, View, ImageBackground} from 'react-native';
import {Colors, Images} from '@common';
import {Slider} from 'react-native-elements';
import {RegularText, MediumText} from '@Typography';

const SliderComponent = props => {
  var {minValue, maxValue, onValueChange, value} = props;
  return (
    <View style={styles.container}>
      <RegularText textStyle={styles.textStyle}>{minValue}</RegularText>
      <View style={styles.sliderViewStyle}>
        <Slider
          value={value}
          onValueChange={onValueChange}
          maximumValue={maxValue}
          minimumValue={minValue}
          step={1}
          trackStyle={{height: 3, backgroundColor: 'transparent'}}
          thumbStyle={{
            height: 20,
            width: 20,
            backgroundColor: value > -1 ? 'black' : 'white',
            borderWidth: 2,
          }}
          thumbProps={{
            children: (
              <ImageBackground
                source={value > -1 ? Images.DropDark : Images.DropLight}
                style={styles.imageBackground}>
                <MediumText textStyle={styles.sliderDropText}>
                  {value}
                </MediumText>
              </ImageBackground>
            ),
          }}
        />
      </View>
      <RegularText textStyle={styles.textStyle}>{maxValue}</RegularText>
    </View>
  );
};

//   SliderComponent.propTypes = {
//   currentSelected: PropTypes.number,
//   labels: PropTypes.arrayOf(string).isRequired,
// };

// SliderComponent.defaultProps = {
//   currentSelected: -1,
//   labels: [],
// };

export default SliderComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 50,
  },
  textStyle: {
    marginTop: 8,
  },
  sliderViewStyle: {
    flex: 1,
    paddingHorizontal: 10,
  },
  imageBackground: {
    width: 50,
    height: 50,
    bottom: 51,
    right: 18,
  },
  sliderDropText: {
    color: Colors.white,
    marginTop: 10,
    fontWeight: '600',
  },
});
