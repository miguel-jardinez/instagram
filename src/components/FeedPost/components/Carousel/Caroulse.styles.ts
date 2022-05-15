import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  carousel: {
    width: '100%',
    aspectRatio: 1,
  },
  dots: {
    width: 7,
    borderRadius: 5,
    aspectRatio: 1,
    margin: 10,
    marginHorizontal: 5,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  imageCaroulse: {
    aspectRatio: 1,
  },
});
