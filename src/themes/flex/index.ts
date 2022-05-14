import {StyleSheet} from 'react-native';
import {align, flex, justify, row} from './aligns';

const alignment = StyleSheet.create({
  ...flex,
  ...align,
  ...justify,
  ...row,
});

export default alignment;
