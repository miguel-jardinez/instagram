import React, {FC} from 'react';
import {Text} from 'react-native';
import {mainTheme} from '../../../themes/globalTheme';

interface PostDescriptionProps {
  postContent: string;
  username: string;
}

const PostDescription: FC<PostDescriptionProps> = ({postContent, username}) => {
  return (
    <Text style={mainTheme.marginTop}>
      <Text style={mainTheme.textBold}>{username} </Text>
      {postContent}
    </Text>
  );
};

export default PostDescription;
