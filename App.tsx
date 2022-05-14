import React from 'react';
import {ScrollView} from 'react-native';
import {FeedPost} from './src/components';
import {feedPost} from './src/utils/mockPost';

const App = () => {
  return (
    <ScrollView>
      {feedPost.map(post => (
        <FeedPost post={post} />
      ))}
    </ScrollView>
  );
};

export default App;
