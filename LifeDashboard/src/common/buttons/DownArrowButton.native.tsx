import React from 'react';
import { Pressable, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface DownArrowButtonProps {
  onPress: () => void;
  style?: ViewStyle;
}

const DownArrowButton: React.FunctionComponent<DownArrowButtonProps> = ({
  onPress, 
  style = {} 
}) => {
  return (
    <Pressable style={style} onPress={onPress}>
      <Icon name='chevron-down-outline' size={20} color='grey'/>
    </Pressable>
  );
};

export default DownArrowButton;
