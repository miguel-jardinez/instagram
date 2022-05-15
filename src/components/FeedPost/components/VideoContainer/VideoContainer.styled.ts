import {StyleSheet} from 'react-native';
import colors from '../../../../themes/colors';

export const styles = StyleSheet.create({
  mutedButton: {
    backgroundColor: colors.black,
    borderRadius: 100,
    padding: 5,
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  video: {
    width: '100%',
    aspectRatio: 1,
  },
});
