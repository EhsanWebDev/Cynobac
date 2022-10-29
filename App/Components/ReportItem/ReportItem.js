import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Colors} from '@common';
import {CustomText} from '@Typography';
import {Icon} from 'react-native-elements';

const ReportItem = ({
  reportId = '',
  reportLocation = '',
  address = '',
  onPress,
  withIcon,
  ...rest
}) => {
  const {status} = rest || {};
  const returnReportStatusColor = reportStatus => {
    if (reportStatus === 'Pending') {
      return Colors.lightParrot;
    }
    if (reportStatus === 'Approved') {
      return Colors.lighterGreen;
    }
    return Colors.lighterRed;
  };
  return (
    <View style={styles.reportItem}>
      <View>
        {!withIcon && (
          <View
            style={[
              styles.reportItemLabel,
              {backgroundColor: returnReportStatusColor(status)},
            ]}>
            <CustomText size={13} title={`ID: ${reportId}`} />
          </View>
        )}

        <TouchableOpacity
          onPress={onPress}
          style={[styles.reportItemButton, withIcon && styles.withIconStyles]}>
          {withIcon && (
            <View style={{marginRight: 24}}>
              <Icon name="map-pin" type="feather" color={Colors.green} />
            </View>
          )}
          <View style={{flex: 1}}>
            <CustomText title={reportLocation} />
            <CustomText title={address} extraStyles={{marginTop: 4}} />
          </View>

          <Icon
            name="chevron-right"
            size={26}
            color={Colors.primaryTextMuted}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  reportItem: {marginTop: 16},
  reportItemLabel: {
    backgroundColor: Colors.lightParrot,
    borderRadius: 12,
    paddingHorizontal: 9,
    paddingVertical: 5,
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  withIconStyles: {
    borderBottomColor: Colors.transparent,
    borderBottomWidth: 0,
    backgroundColor: Colors.inputBG,
    padding: 12,
    borderRadius: 12,
  },
  reportItemButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 12,
    paddingBottom: 16,
    borderBottomColor: Colors.greenMuted,
    borderBottomWidth: 1,
  },
});
export default ReportItem;
