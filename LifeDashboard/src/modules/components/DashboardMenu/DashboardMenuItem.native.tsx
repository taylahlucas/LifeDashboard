import React from 'react';
import { Pressable } from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import dashboardMenuStyles from './DashboardMenuStyles.native';
import { DashboardMenuItemType, IconType } from '../../../data/widgetData.native';

interface DashboardMenuItemProps {
  style: object;
  item: DashboardMenuItemType;
}

const DashboardMenuItem = ({ style, item }: DashboardMenuItemProps) => {
  return (
    <Pressable 
      style={{...style}}
      // onPress={(): void => }
    >
      {/* // TODO: Refactor */}
      {item.iconType === IconType.MaterialIcon
        ? <MaterialIcons
          style={dashboardMenuStyles.icon} 
          name={item.icon} 
          size={40} 
          color='white' 
        /> 
        : <IonIcons 
          style={dashboardMenuStyles.icon} 
          name={item.icon} 
          size={40} 
          color='white' 
        />
      }
    </Pressable>
  );
};

export default DashboardMenuItem;