import React, {FC, useState} from 'react';
import {View, Pressable} from 'react-native';
import Video from 'react-native-video';
import IonIcon from 'react-native-vector-icons/Ionicons';
import colors from '../../../../themes/colors';
import {styles} from './VideoContainer.styled';

interface VideoContainerProps {
  video: string;
  isVisible: boolean;
}

const VideoContainer: FC<VideoContainerProps> = ({video, isVisible}) => {
  const [isMuted, setIsMuted] = useState<boolean>(true);

  const handleMuted = () => {
    setIsMuted(!isMuted);
  };

  return (
    <View>
      <Video
        resizeMode="cover"
        style={styles.video}
        source={{uri: video}}
        repeat
        muted={isMuted}
        paused={!isVisible}
      />
      <Pressable onPress={handleMuted} style={styles.mutedButton}>
        <IonIcon
          name={isMuted ? 'volume-mute' : 'volume-medium'}
          size={14}
          color={colors.white}
        />
      </Pressable>
    </View>
  );
};

export default VideoContainer;
