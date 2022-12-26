import React from 'react';
import { Pressable, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface InputClearButtonProps {
  onPress: () => void;
  style?: ViewStyle;
}

const InputClearButton: React.FunctionComponent<InputClearButtonProps> = ({
  onPress, 
  style = {} 
}) => {
  return (
    <Pressable style={style} onPress={onPress}>
      <Icon name='close-circle-outline' size={25} color='grey'/>
    </Pressable>
  );
};

export default InputClearButton;
