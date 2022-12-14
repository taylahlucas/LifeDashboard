import React from 'react';
import { Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import dashboardMenuStyles from './DashboardMenuStyles.native';

interface DashboardMenuItemProps {
  style: object;
  icon: string;
}

const DashboardMenuItem = ({ style, icon }: DashboardMenuItemProps) => {
  return (
    <Pressable style={{...style}}>
      <Icon style={dashboardMenuStyles.icon} name={icon} size={40} color='white' />
    </Pressable>
  );
};

export default DashboardMenuItem;