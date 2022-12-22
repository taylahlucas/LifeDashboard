import React from 'react';
import { Pressable } from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import dashboardMenuStyles from './DashboardMenuStyles.native';
import { DashboardMenuItemType, IconType } from '../../../data/widgetData.native';

interface DashboardMenuItemProps {
  style: object;
  item: DashboardMenuItemType;
  onPress: () => void;
}

const DashboardMenuItem = ({ style, item, onPress }: DashboardMenuItemProps) => {
  return (
    <Pressable 
      style={{...style}}
    >
      {/* // TODO: Refactor */}
      {item.iconType === IconType.MaterialIcon
        ? <MaterialIcons
            style={dashboardMenuStyles.icon} 
            name={item.icon} 
            size={40} 
            color='white' 
            // TODO: Navigate to screen
            onPress={onPress}
          /> 
        : <IonIcons 
            style={dashboardMenuStyles.icon} 
            name={item.icon} 
            size={40} 
            color='white' 
            onPress={(): void => console.log("PRESSED-2")}
          />
      }
    </Pressable>
  );
};

export default DashboardMenuItem;