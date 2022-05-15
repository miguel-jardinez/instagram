import React, {FC} from 'react';
import {Image} from 'react-native';
import {styles} from '../Post.styles';
import Carousel from './Carousel';

interface ImageContainer {
  image?: string;
  images?: string[];
}

const ImageContainer: FC<ImageContainer> = ({image, images}) => {
  return (
    <>
      {!images ? (
        <Image source={{uri: image}} style={styles.image} />
      ) : (
        <Carousel images={images} />
      )}
    </>
  );
};

export default ImageContainer;
