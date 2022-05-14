import {StyleSheet} from 'react-native';
import {
  marginsBottom,
  marginsLeft,
  marginsRight,
  marginsTop,
} from './allMargins';

const margins = StyleSheet.create({
  ...marginsBottom,
  ...marginsLeft,
  ...marginsTop,
  ...marginsRight,
});

export default margins;
