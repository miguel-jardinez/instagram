import React, {FC} from 'react';
import {View, Image, Text} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {styles} from '../Post.styles';

interface HeaderPostProps {
  avatar: string;
  username: string;
}

const HeaderPost: FC<HeaderPostProps> = ({username, avatar}) => {
  return (
    <View style={styles.header}>
      <Image
        source={{
          uri: avatar,
        }}
        style={styles.avatar}
      />
      <Text style={styles.username}>{username}</Text>
      <Entypo name="dots-three-horizontal" size={16} style={styles.threeDots} />
    </View>
  );
};

export default HeaderPost;
