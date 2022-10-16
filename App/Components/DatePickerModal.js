import React, {Component} from 'react';
import {
  Modal,
  Text,
  TouchableOpacity,
  View,
  Alert,
  TouchableHighlight,
  Platform,
  Image,
  StyleSheet,
} from 'react-native';
import {ListItem, Body, Right, Left, Box} from 'native-base';
import {Images, Languages, Colors, Fonts} from '@common';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import {LargeText, SmallText, RegularText} from '@Typography';
import {Icon} from 'react-native-elements';
class DatePickerModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      date: new Date(),
      selectedDate: null,
      selectedTime: null,
      pickerMode: 'date',
    };
  }
  componentDidMount() {
    // const { selectedDate } = this.props;
    // console.log("selectedDate",selectedDate);
    // this.setState({ selectedDate: selectedDate });
  }
  componentWillReceiveProps(nextProps) {
    var {selectedDate} = nextProps;
    // console.log('selectedDate Props', selectedDate);
    // console.log('selectedDateState', this.state.selectedDate);

    if (!selectedDate) {
      this.setState({selectedDate: null});
    } else {
      // Wed Nov 04 2020
      console.log('formateele', moment(selectedDate).format('ddd MMMM D YYYY'));
      this.setState({selectedDate: moment(selectedDate).format('L')});
    }
  }
  setDate = (event, date) => {
    date = date || this.state.date;

    this.setState({
      modalVisible: Platform.OS === 'ios' ? true : false,
      date,
      // selectedDate: date,
      selectedDate: Platform.OS === 'ios' ? undefined : date,
    });
    if (Platform.OS !== 'ios') {
      this.combineDateTime();
    }
  };

  setTime = (event, date) => {
    date = date || this.state.date;
    this.setState({
      modalVisible: Platform.OS === 'ios' ? true : false,
      date,
      // selectedTime: date,
      selectedTime: Platform.OS === 'ios' ? undefined : date,
    });
    if (Platform.OS !== 'ios') {
      this.combineDateTime();
    }
  };

  combineDateTime = () => {
    const {selectedDate, selectedTime} = this.state;
    var date = selectedDate;
    if (selectedTime) {
      date = new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        selectedDate.getDate(),
        selectedTime.getHours(),
        selectedTime.getMinutes(),
        selectedTime.getSeconds(),
      );
    }
    this.setState({selectedTime: date});
    this.props.setSelectedDate(date);
  };

  saveDate = () => {
    const {selectedDate, selectedTime} = this.state;
    var date = selectedDate ? selectedDate : this.state.date;
    if (selectedTime) {
      date = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        selectedTime.getHours(),
        selectedTime.getMinutes(),
        selectedTime.getSeconds(),
      );
    }
    console.log('datefromDatePickerset'.date);
    this.setState({
      selectedDate: date,
      selectedTime: date,
      modalVisible: false,
    });
    this.props.setSelectedDate(date);
  };

  render() {
    const {modalVisible, date, selectedDate, pickerMode, selectedTime} =
      this.state;
    const {placeholder, minimumDate, containerStyle} = this.props;
    if (Platform.OS === 'ios') {
      return (
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() =>
              this.setState({modalVisible: true, pickerMode: 'date'})
            }
            style={[styles.datePickerContainer, containerStyle]}>
            <Image
              source={Images.calendarWhite}
              resizeMode="contain"
              style={styles.imageStyle}
            />
            {selectedDate != null ? (
              <RegularText textStyle={styles.textStyle}>
                {moment(selectedDate).format('L')}
              </RegularText>
            ) : (
              <RegularText textStyle={styles.placeholder}>
                {placeholder}
              </RegularText>
            )}
          </TouchableOpacity>

          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}>
            <TouchableHighlight
              style={styles.backgroundContainer}
              onPress={() => this.setState({modalVisible: false})}>
              <View style={styles.pickerContainer}>
                <View style={styles.pickerDoneCloseContainer}>
                  {/* <Box>
                <ListItem>
                  <Left> */}
                  <TouchableOpacity
                    onPress={() => this.setState({modalVisible: false})}>
                    <Text style={styles.buttonTextStyle}>Cancel</Text>
                  </TouchableOpacity>
                  {/* </Left> */}

                  {/* <Right> */}
                  <TouchableOpacity onPress={() => this.saveDate()}>
                    <Text style={styles.buttonTextStyle}>Done</Text>
                  </TouchableOpacity>
                  {/* </Right>
                </ListItem>
                </Box> */}
                </View>

                <DateTimePicker
                  minimumDate={minimumDate}
                  value={date}
                  mode={pickerMode}
                  onChange={pickerMode === 'date' ? this.setDate : this.setTime}
                  display={'spinner'}
                />
              </View>
            </TouchableHighlight>
          </Modal>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() =>
              this.setState({modalVisible: true, pickerMode: 'date'})
            }
            style={[styles.datePickerContainer, containerStyle]}>
            <Image
              source={Images.calendarWhite}
              resizeMode="contain"
              style={styles.imageStyle}
            />
            {selectedDate != null ? (
              <RegularText textStyle={styles.textStyle}>
                {moment(selectedDate).format('L')}
              </RegularText>
            ) : (
              <RegularText textStyle={styles.placeholder}>
                {placeholder}
              </RegularText>
            )}
          </TouchableOpacity>
          {modalVisible && (
            <DateTimePicker
              minimumDate={minimumDate}
              value={date}
              mode={pickerMode}
              onChange={pickerMode === 'date' ? this.setDate : this.setTime}
            />
          )}
        </View>
      );
    }
  }
}

DatePickerModal.defaultProps = {};

export default DatePickerModal;

const styles = StyleSheet.create({
  container: {flex: 1},
  datePickerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // borderColor: Colors.mediumGray,
    // borderWidth: 1,
    borderRadius: 5,
    height: 48,
    paddingLeft: 10,
    marginBottom: 20,
    backgroundColor: Colors.inputBG,
  },
  textStyle: {
    color: Colors.black,
  },
  backgroundContainer: {
    flex: 1,
    backgroundColor: Colors.semiTransparent,
    justifyContent: 'flex-end',
  },
  pickerContainer: {
    backgroundColor: 'white',
    paddingBottom: 30,
    // flexDirection:'row',
    // justifyContent:'space-between'
  },
  buttonTextStyle: {
    color: 'blue',
  },
  imageStyle: {
    height: 30,
  },
  placeholder: {
    color: Colors.primaryTextMuted,
  },
  pickerDoneCloseContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
});
