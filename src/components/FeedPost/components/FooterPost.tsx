import React, {useState, FC} from 'react';
import {Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Comment} from '..';
import colors from '../../../themes/colors';
import {mainTheme} from '../../../themes/globalTheme';
import Container from '../../Container';
import {styles} from '../Post.styles';
import Comments from './Comments';
import PostDescription from './PostDescription';

interface FooterPostProps {
  isLiked: boolean;
  isSaved: boolean;
  username: string;
  likes: number;
  comment: Comment;
  postContent: string;
}

const FooterPost: FC<FooterPostProps> = ({
  comment,
  isLiked,
  isSaved,
  likes,
  username,
  postContent,
}) => {
  const [like, setLike] = useState<boolean>(isLiked);
  const [save, setSave] = useState<boolean>(isSaved);

  const handleLikePost = () => {
    setLike(!like);
  };

  const handleSavePost = () => {
    setSave(!save);
  };

  return (
    <Container>
      <View style={styles.iconContainer}>
        <AntDesign
          name={like ? 'heart' : 'hearto'}
          size={24}
          style={styles.icon}
          color={colors.black}
          onPress={handleLikePost}
        />
        <Ionicons
          name="chatbubble-outline"
          size={24}
          style={styles.icon}
          color={colors.black}
        />
        <Feather
          name="send"
          size={24}
          style={styles.icon}
          color={colors.black}
        />
        <FontAwesome
          name={save ? 'bookmark' : 'bookmark-o'}
          onPress={handleSavePost}
          size={24}
          style={styles.saveIcon}
          color={colors.black}
        />
      </View>
      <Text>
        Liked by <Text style={mainTheme.textBold}>{username}</Text> and{' '}
        <Text style={mainTheme.textBold}>{likes} others</Text>
      </Text>
      <PostDescription postContent={postContent} username={username} />
      <Comments comment={comment} />
    </Container>
  );
};

export default FooterPost;
