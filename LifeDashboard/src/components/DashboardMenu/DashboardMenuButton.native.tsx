import React from 'react';
import { Pressable } from 'react-native';
// import Icon from 'react-native-vector-icons';

interface DashboardMenuButtonProps {
  onPress: () => void
}

const DashboardMenuButton = ({ onPress }: DashboardMenuButtonProps) => {
  return (
    <Pressable 
      style={{ 
        backgroundColor: 'white',
        width: 40, 
        height: 40, 
        position: 'absolute', 
        left: 0, 
        top: 0, 
        zIndex: 4
      }}
      onPress={(): void => onPress()} />
  );
};

export default DashboardMenuButton;