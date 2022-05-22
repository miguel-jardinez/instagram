import React, {FC, useState} from 'react';
import {View, Text, Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../../themes/colors';
import {mainTheme} from '../../../themes/globalTheme';
import {CommentsTypes} from '../../../types/comments';
import {styles} from './Comment.styles';

interface CommentProps {
  comment: CommentsTypes;
}

const Comment: FC<CommentProps> = ({comment}) => {
  const [like, setLike] = useState<boolean>(comment.isLiked);

  const handleLikePost = () => {
    setLike(!like);
  };
  return (
    <View style={[mainTheme.marginTop2, mainTheme.row, mainTheme.alignCenter]}>
      <Image style={mainTheme.avatar} source={{uri: comment.user.image}} />
      <View style={[mainTheme.flex1, mainTheme.marginLeft2]}>
        <Text>
          <Text style={mainTheme.textBold}>{comment.user.username}</Text>
          {comment.comment}
        </Text>
      </View>
      <AntDesign
        name={like ? 'heart' : 'hearto'}
        style={styles.icon}
        color={like ? colors.accent : colors.black}
        onPress={handleLikePost}
      />
    </View>
  );
};

export default Comment;
