import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import {fonts, weight} from '../../themes/fonts';

export const styles = StyleSheet.create({
  post: {},
  image: {
    width: '100%',
    aspectRatio: 1,
  },
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
  iconContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  icon: {
    marginHorizontal: 5,
  },
  saveIcon: {
    marginLeft: 'auto',
  },
  comments: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likesText: {
    color: colors.grey,
  },
  dateText: {
    marginTop: 6,
    color: colors.grey,
    fontSize: fonts.xs,
  },
});
