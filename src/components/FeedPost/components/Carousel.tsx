import React, {FC, useState, useRef} from 'react';
import {
  Image,
  View,
  FlatList,
  useWindowDimensions,
  ViewabilityConfig,
  ViewToken,
} from 'react-native';
import colors from '../../../themes/colors';
import {styles} from '../Post.styles';

interface CarouselProps {
  images: string[];
}

interface onViewableItemsChanged {
  viewableItems: ViewToken[];
}

const Carousel: FC<CarouselProps> = ({images}) => {
  const {width} = useWindowDimensions();
  const [currentIdx, setCurrentIdx] = useState<number>(0);

  const onViewableItemsChanged = useRef(
    ({viewableItems}: onViewableItemsChanged) => {
      if (viewableItems.length > 0) {
        console.log(viewableItems[0].index);
        setCurrentIdx(viewableItems[0].index || 0);
      }
    },
  );

  const viewabilityConfig: ViewabilityConfig = {
    viewAreaCoveragePercentThreshold: 51,
  };

  return (
    <View>
      <FlatList
        keyExtractor={item => item}
        renderItem={({item}) => (
          <Image style={{width, aspectRatio: 1}} source={{uri: item}} />
        )}
        data={images}
        horizontal
        pagingEnabled
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewabilityConfig}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.dotContainer}>
        {images.map((_, index) => (
          <View
            style={[
              styles.dots,
              {
                backgroundColor:
                  currentIdx === index ? colors.white : colors.lightGrey,
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default Carousel;
