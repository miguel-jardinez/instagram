import React, {FC} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {styles} from './Container.styles';

type SizeContainer = 'xs' | 'md' | 'lg';

type ContainerProps = {
  size?: SizeContainer;
};

const getSize = (size: SizeContainer): StyleProp<ViewStyle> => {
  switch (size) {
    case 'xs':
      return styles.xs;
    case 'md':
      return styles.md;
    default:
      return styles.lg;
  }
};

const Container: FC<ContainerProps> = ({children, size = 'md'}) => {
  return <View style={getSize(size)}>{children}</View>;
};

export default Container;
