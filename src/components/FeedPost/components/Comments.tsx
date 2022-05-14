import React, {useState, FC} from 'react';
import {View, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Comment} from '..';
import colors from '../../../themes/colors';
import {mainTheme} from '../../../themes/globalTheme';
import {styles} from '../Post.styles';

interface CommentsProps {
  comment: Comment;
}

const Comments: FC<CommentsProps> = ({comment}) => {
  const {commentContent, date, isLiked, totalComments, username} = comment;
  const [like, setLike] = useState<boolean>(isLiked);

  const handleLikePost = () => {
    setLike(!like);
  };

  return (
    <>
      <Text style={mainTheme.marginTop1}>
        View all {totalComments} comments
      </Text>
      <View>
        <View style={styles.comments}>
          <Text style={[mainTheme.marginTop, mainTheme.flex1]}>
            <Text style={mainTheme.textBold}>{username} </Text>
            {commentContent}
          </Text>
          <AntDesign
            name={like ? 'heart' : 'hearto'}
            style={styles.icon}
            color={colors.black}
            onPress={handleLikePost}
          />
        </View>
        <Text style={mainTheme.marginTop}>{date}</Text>
      </View>
    </>
  );
};

export default Comments;
