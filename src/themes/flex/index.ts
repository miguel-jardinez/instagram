import {StyleSheet} from 'react-native';
import {align, flex, justify} from './aligns';

const alignment = StyleSheet.create({
  ...flex,
  ...align,
  ...justify,
});

export default alignment;
