import React, {FC} from 'react';
import {Image} from 'react-native';
import Carousel from '../Carousel/Carousel';
import {styles} from './ImageContainer.styles';

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
