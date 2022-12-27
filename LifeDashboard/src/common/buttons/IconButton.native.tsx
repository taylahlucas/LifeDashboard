import React from 'react';
import { Pressable, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface IconButtonProps {
  name: string;
  onPress: () => void;
  style?: ViewStyle;
  height?: number;
}

const IconButton: React.FunctionComponent<IconButtonProps> = ({
  name,
  onPress, 
  style = {},
  height = 40
}) => {
  return (
    <Pressable style={style} onPress={onPress}>
      <Icon name={name} size={height} color='grey'/>
    </Pressable>
  );
};

export default IconButton;

//add-outline