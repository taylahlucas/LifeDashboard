import React from 'react';
import { Pressable, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface TickButtonProps {
  onPress: () => void;
  style?: ViewStyle;
}

const TickButton: React.FunctionComponent<TickButtonProps> = ({
  onPress, 
  style = {} 
}) => {
  return (
    <Pressable style={style} onPress={onPress}>
      <Icon name='checkmark-done-outline' size={40} color='grey'/>
    </Pressable>
  );
};

export default TickButton;
