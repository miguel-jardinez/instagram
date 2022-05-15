import React, {FC} from 'react';
import {View} from 'react-native';
import FooterPost from './components/FooterPost/FooterPost';
import HeaderPost from './components/HeaderPost/HeaderPost';
import ImageContainer from './components/ImageContainer/ImageContainer';
import VideoContainer from './components/VideoContainer/VideoContainer';
import {styles} from './Post.styles';

export interface Comment {
  id: string;
  username: string;
  isLiked: boolean;
  commentContent: string;
  date: string;
}

export interface FeedPostInterface {
  image?: string;
  images?: string[];
  video?: string;
  user: {
    username: string;
    avatar: string;
  };
  postcontent: string;
  likes: number;
  isLiked: boolean;
  comments: Comment[];
  isSaved: boolean;
  id: string;
  totalComments: number;
  date: string;
}

interface FeedPostProps {
  post: FeedPostInterface;
}

const FeedPost: FC<FeedPostProps> = ({post}) => {
  return (
    <View style={styles.post}>
      <HeaderPost avatar={post.user.avatar} username={post.user.username} />
      {!post.video ? (
        <ImageContainer image={post?.image} images={post?.images} />
      ) : (
        <VideoContainer video={post.video} />
      )}
      <FooterPost
        image={post.image}
        images={post.images}
        date={post.date}
        isLiked={post.isLiked}
        isSaved={post.isSaved}
        username={post.user.username}
        likes={post.likes}
        comments={post.comments}
        totalComments={post.totalComments}
        postContent={post.postcontent}
      />
    </View>
  );
};

export default FeedPost;
