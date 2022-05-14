import {StyleSheet} from 'react-native';
import alignment from './flex';
import {weight} from './fonts';
import margins from './margins';

export const mainTheme = StyleSheet.create({
  textBold: {
    fontWeight: weight.bold,
  },
  textLight: {
    fontWeight: weight.thin,
  },
  ...margins,
  ...alignment,
});
