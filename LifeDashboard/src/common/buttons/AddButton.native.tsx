import React from 'react';
import { Pressable, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface AddButtonProps {
  onPress: () => void;
  style?: ViewStyle;
}

const AddButton: React.FunctionComponent<AddButtonProps> = ({
  onPress, 
  style = {} 
}) => {
  return (
    <Pressable style={style} onPress={onPress}>
      <Icon name='add-outline' size={40} color='grey'/>
    </Pressable>
  );
};

export default AddButton;
