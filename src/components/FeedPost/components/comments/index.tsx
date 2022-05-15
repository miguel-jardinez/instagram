import React, {FC} from 'react';
import {Text} from 'react-native';
import {Comment as CommentType} from '../..';
import {mainTheme} from '../../../../themes/globalTheme';
import Comment from '../Comment';
import {styles} from './Comments.styles';

interface CommentsProps {
  comments: CommentType[];
  totalComments: number;
  date: string;
}

const Comments: FC<CommentsProps> = ({totalComments, comments, date}) => {
  return (
    <>
      <Text style={[mainTheme.marginTop1, styles.likesText]}>
        View all {totalComments} comments
      </Text>
      <Comment comment={comments[0]} />
      <Text style={styles.dateText}>{date}</Text>
    </>
  );
};

export default Comments;
