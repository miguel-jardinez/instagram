import React, {FC} from 'react';
import {View} from 'react-native';
import FooterPost from './components/FooterPost';
import HeaderPost from './components/HeaderPost';
import ImageContainer from './components/ImageContainer';
import VideoContainer from './components/VideoContainer';
import {styles} from './Post.styles';

export interface Comment {
  user: {
    id: string;
    image: string;
    username: string;
  };
  isLiked: boolean;
  comment: string;
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
  isSaved: boolean;
  id: string;
  totalComments: number;
  date: string;
}

interface FeedPostProps {
  isVisible: boolean;
  post: FeedPostInterface;
}

const FeedPost: FC<FeedPostProps> = ({post, isVisible}) => {
  return (
    <View style={styles.post}>
      <HeaderPost avatar={post.user.avatar} username={post.user.username} />
      {!post.video ? (
        <ImageContainer image={post?.image} images={post?.images} />
      ) : (
        <VideoContainer isVisible={isVisible} video={post.video} />
      )}
      <FooterPost
        image={post.image}
        images={post.images}
        date={post.date}
        isLiked={post.isLiked}
        isSaved={post.isSaved}
        username={post.user.username}
        likes={post.likes}
        totalComments={post.totalComments}
        postContent={post.postcontent}
      />
    </View>
  );
};

export default FeedPost;
