import React from 'react';
import { Pressable, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface CircleTickButtonProps {
  onPress: () => void;
  isSelected: boolean;
  style?: ViewStyle;
}

const CircleTickButton: React.FunctionComponent<CircleTickButtonProps> = ({
  onPress, 
  isSelected = false,
  style = {} 
}) => {
  return (
    <Pressable style={style} onPress={onPress}>
      <Icon name='checkmark-circle-outline' size={20} color={isSelected ? '#CAA3F9' : 'grey'} />
    </Pressable>
  );
};

export default CircleTickButton;
