import React, {FC, useRef, useState} from 'react';
import {FlatList, ViewabilityConfig, ViewToken} from 'react-native';
import {FeedPostInterface} from '../FeedPost';
import {FeedPost} from '..';

interface FeedList {
  post: FeedPostInterface[];
}
interface onViewableItemsChanged {
  viewableItems: ViewToken[];
}

const FeedList: FC<FeedList> = ({post}) => {
  const [activePostId, setActivePostId] = useState<string | null>(null);

  const onViewableItemsChanged = useRef(
    ({viewableItems}: onViewableItemsChanged) => {
      if (viewableItems.length > 0) {
        setActivePostId(viewableItems[0].item.id);
      }
    },
  );

  const viewabilityConfig: ViewabilityConfig = {
    viewAreaCoveragePercentThreshold: 51,
  };

  return (
    <FlatList
      data={post}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <FeedPost isVisible={activePostId === item.id} post={item} />
      )}
      showsVerticalScrollIndicator={false}
      onViewableItemsChanged={onViewableItemsChanged.current}
      viewabilityConfig={viewabilityConfig}
    />
  );
};

export default FeedList;
