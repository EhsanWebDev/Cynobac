import {StyleSheet} from 'react-native';
import {GlobalStyles} from '@common';
import Colors from '../../../../Common/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginHorizontal: GlobalStyles.Constants.sizes.lg,
  },
  row: {flexDirection: 'row', alignItems: 'center'},
  rowSB: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nameContainer: {marginLeft: 16},
  closeButton: {
    borderColor: Colors.inputBG,
    padding: 4,
    borderWidth: 1,
  },
  spaceMax: {marginBottom: 40},
  spaceAmongItems: {marginBottom: 36},
  signOut: {flex: 1, justifyContent: 'flex-end'},
});

export default styles;
