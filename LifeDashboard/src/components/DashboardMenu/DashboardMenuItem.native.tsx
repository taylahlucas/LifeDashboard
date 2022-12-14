import React from 'react';
import { Pressable } from 'react-native';

const DashboardMenuItem = () => {
  return (
    <Pressable 
      style={{
        backgroundColor: 'blue',
        width: 40,
        height: 40,
        position: 'absolute',
        left: 10,
        zIndex: 5
      }}/>
  );
};

export default DashboardMenuItem;