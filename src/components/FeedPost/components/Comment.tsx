import React, {FC, useState} from 'react';
import {View, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../../themes/colors';
import {mainTheme} from '../../../themes/globalTheme';
import {styles} from '../Post.styles';
import {Comment as CommentType} from '..';

interface CommentProps {
  comment: CommentType;
}

const Comment: FC<CommentProps> = ({comment}) => {
  const [like, setLike] = useState<boolean>(comment.isLiked);

  const handleLikePost = () => {
    setLike(!like);
  };
  return (
    <View style={mainTheme.marginTop}>
      <View style={styles.comments}>
        <Text style={mainTheme.flex1}>
          <Text style={mainTheme.textBold}>{comment.username} </Text>
          {comment.commentContent}
        </Text>
        <AntDesign
          name={like ? 'heart' : 'hearto'}
          style={styles.icon}
          color={colors.black}
          onPress={handleLikePost}
        />
      </View>
    </View>
  );
};

export default Comment;
