import {StyleSheet} from 'react-native';

export const justify = StyleSheet.create({
  justifyBetween: {
    justifyContent: 'space-between',
  },
  jutifyStart: {
    justifyContent: 'flex-start',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
});

export const align = StyleSheet.create({
  alignCenter: {
    alignItems: 'center',
  },
  alignStart: {
    alignItems: 'flex-start',
  },
  alignEnd: {
    alignItems: 'flex-start',
  },
});

export const flex = StyleSheet.create({
  flex1: {
    flex: 1,
  },
});
