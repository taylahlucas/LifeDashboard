import React from 'react';
import { Pressable } from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import sideMenuStyles from './SideMenuStyles';
import { SideMenuItemType, IconType } from '../../../data/widgetData.native';

interface SideMenuItemProps {
  style: object;
  item: SideMenuItemType;
  onPress: () => void;
}

const SideMenuItem = ({ style, item, onPress }: SideMenuItemProps) => {
  return (
    <Pressable 
      style={{...style}}
    >
      {/* // TODO: Refactor */}
      {item.iconType === IconType.MaterialIcon
        ? <MaterialIcons
            style={sideMenuStyles.icon} 
            name={item.icon} 
            size={40} 
            color='white' 
            // TODO: Navigate to screen
            onPress={onPress}
          /> 
        : <IonIcons 
            style={sideMenuStyles.icon} 
            name={item.icon} 
            size={40} 
            color='white' 
            onPress={(): void => console.log("PRESSED-2")}
          />
      }
    </Pressable>
  );
};

export default SideMenuItem;