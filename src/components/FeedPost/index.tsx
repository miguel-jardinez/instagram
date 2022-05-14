import React, {FC} from 'react';
import {View, Image} from 'react-native';
import FooterPost from './components/FooterPost';
import HeaderPost from './components/HeaderPost';
import {styles} from './Post.styles';

export interface Comment {
  username: string;
  isLiked: boolean;
  commentContent: string;
  date: string;
  totalComments: number;
}

export interface FeedPost {
  img: string;
  username: string;
  avatar: string;
  postcontent: string;
  likes: number;
  isLiked: boolean;
  comment: Comment;
  isSaved: boolean;
}

interface FeedPostProps {
  post: FeedPost;
}

const FeedPost: FC<FeedPostProps> = ({post}) => {
  return (
    <View style={styles.post}>
      <HeaderPost avatar={post.avatar} username={post.username} />
      {/* Content */}
      <Image source={{uri: post.img}} style={styles.image} />
      <FooterPost
        isLiked={post.isLiked}
        isSaved={post.isSaved}
        username={post.username}
        likes={post.likes}
        comment={post.comment}
        postContent={post.postcontent}
      />
    </View>
  );
};

export default FeedPost;
