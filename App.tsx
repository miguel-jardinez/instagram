import React from 'react';
import {SafeAreaView} from 'react-native';
import {FeedList} from './src/components';
import {feedPost} from './src/utils/mockPost';

const App = () => {
  return (
    <SafeAreaView>
      <FeedList post={feedPost} />
    </SafeAreaView>
  );
};

export default App;
