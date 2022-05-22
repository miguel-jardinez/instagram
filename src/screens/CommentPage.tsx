import React from 'react';
import {FlatList} from 'react-native';
import {comments} from '../utils/mockComments';
import Comment from '../UI/components/Comment';
import Container from '../components/Container';

const CommentPage = () => {
  return (
    <Container size={'md'}>
      <FlatList
        data={comments}
        renderItem={({item}) => <Comment isPage={true} comment={item} />}
      />
    </Container>
  );
};

export default CommentPage;
