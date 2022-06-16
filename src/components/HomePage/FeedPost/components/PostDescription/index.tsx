import React, {FC, useState} from 'react';
import {Text, View} from 'react-native';
import {mainTheme} from '../../../../../themes/globalTheme';
import {styles} from './PostDescription.styles';

interface PostDescriptionProps {
  postContent: string;
  username: string;
}

const PostDescription: FC<PostDescriptionProps> = ({postContent, username}) => {
  const [showMore, setShowMore] = useState<boolean>(false);
  return (
    <View>
      <Text numberOfLines={showMore ? 0 : 2} style={mainTheme.marginTop}>
        <Text style={mainTheme.textBold}>{username} </Text>
        {postContent}
      </Text>
      {!showMore && (
        <Text style={styles.showMore} onPress={() => setShowMore(true)}>
          more
        </Text>
      )}
    </View>
  );
};

export default PostDescription;
