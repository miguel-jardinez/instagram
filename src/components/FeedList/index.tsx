import React, {FC} from 'react';
import {FlatList} from 'react-native';
import {FeedPostInterface} from '../FeedPost';
import {FeedPost} from '..';

interface FeedList {
  post: FeedPostInterface[];
}

const FeedList: FC<FeedList> = ({post}) => {
  return (
    <FlatList
      data={post}
      keyExtractor={item => item.id}
      renderItem={({item}) => <FeedPost post={item} />}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default FeedList;
