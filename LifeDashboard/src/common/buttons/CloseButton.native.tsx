import React from 'react';
import { Pressable, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface CloseButtonProps {
  onPress: () => void;
  style?: ViewStyle;
}

const CloseButton: React.FunctionComponent<CloseButtonProps> = ({
  onPress, 
  style = {} 
}) => {
  return (
    <Pressable style={style} onPress={onPress}>
      <Icon name='close-outline' size={40} color='grey'/>
    </Pressable>
  );
};

export default CloseButton;
