import {StyleSheet} from 'react-native';
import colors from '../../../../themes/colors';
import {weight} from '../../../../themes/fonts';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    height: 30,
    width: 30,
    borderRadius: 25,
    marginRight: 10,
  },
  username: {
    fontWeight: weight.bold,
    color: colors.black,
  },
  threeDots: {
    marginLeft: 'auto',
  },
});
