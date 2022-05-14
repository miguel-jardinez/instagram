import React from 'react';
import {FeedList} from '../components';
import {feedPost} from '../utils/mockPost';

const HomePage = () => {
  return <FeedList post={feedPost} />;
};

export default HomePage;
