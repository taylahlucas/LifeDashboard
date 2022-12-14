import React from 'react';
import { Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface DashboardMenuButtonProps {
  onPress: () => void
}

const DashboardMenuButton = ({ onPress }: DashboardMenuButtonProps) => {
  return (
    <Pressable 
      style={{ 
        width: 40, 
        height: 40, 
        position: 'absolute', 
        left: 10, 
        top: 10, 
        zIndex: 4
      }}
      onPress={(): void => onPress()}>
        {/* // TODO: Animate turning icon on menu open */}
        <Icon name='menu-outline' size={40} color='white'/>
      </Pressable>
  );
};

export default DashboardMenuButton;