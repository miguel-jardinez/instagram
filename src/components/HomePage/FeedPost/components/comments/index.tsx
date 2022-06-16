import React, {FC} from 'react';
import {Text} from 'react-native';
import {mainTheme} from '../../../../../themes/globalTheme';
import {styles} from './Comments.styles';

interface CommentsProps {
  totalComments: number;
  date: string;
}

const Comments: FC<CommentsProps> = ({totalComments, date}) => {
  return (
    <>
      <Text style={[mainTheme.marginTop1, styles.likesText]}>
        View {totalComments > 0 && 'all'} {totalComments} comments
      </Text>
      <Text style={styles.dateText}>{date}</Text>
    </>
  );
};

export default Comments;
