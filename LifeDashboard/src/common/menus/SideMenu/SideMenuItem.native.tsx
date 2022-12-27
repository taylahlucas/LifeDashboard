import React from 'react';
import { Pressable } from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import sideMenuStyles from './SideMenuStyles';
import { SideMenuItemType, IconType } from '../../../data/widgetData.native';
import Condition from '../../general/Condition.native';

interface SideMenuItemProps {
  style: object;
  item: SideMenuItemType;
  onPress: () => void;
}

const SideMenuItem = ({ style, item, onPress }: SideMenuItemProps) => {
  console.log("HERE: ", item.iconType)
  console.log("HERE: ", item.icon)
  return (
    <Pressable style={{...style}}>
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
            onPress={onPress}
          />
      }
      {/* // TODO: Refactor  Condition to work with If / Else */}
      {/* <Condition 
        condition={item.iconType === IconType.MaterialIcon}
        conditional={
          <IonIcons 
            style={sideMenuStyles.icon} 
            name={item.icon}
            size={40} 
            color='white' 
            onPress={onPress}
          />
        }>
        <MaterialIcons
          style={sideMenuStyles.icon} 
          name={item.icon} 
          size={40} 
          color='white' 
          onPress={onPress}
        />
      </Condition> */}
    </Pressable>
  );
};

export default SideMenuItem;