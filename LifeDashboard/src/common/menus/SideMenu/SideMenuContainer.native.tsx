import React from 'react';
import { View } from 'react-native';
import SideMenuItem from './SideMenuItem.native';
import sideMenuStyles from'./SideMenuStyles';
import { widgetData } from '../../../data/widgetData.native';
import { useReactNavigation, PageEnum } from '../../../navigation/hooks/useReactNavigation.native';

interface SideMenuContainerProps {
  onItemPress: () => void;
}

const SideMenuContainer = ({ onItemPress }: SideMenuContainerProps): JSX.Element => {
  const navigation = useReactNavigation();

  return (
    <>
      <View style={sideMenuStyles.container} />
      <View style={sideMenuStyles.row}>
        {widgetData.map(widget => 
          <SideMenuItem 
            key={widget.type}
            style={{ 
              ...sideMenuStyles.box, 
              backgroundColor: widget.backgroundColor 
            }} 
            item={widget}
            onPress={(): void => {
              navigation.navigate(widget.page)
              onItemPress();
            }}
          />)
        }
      </View>
    </>
  );
};

export default SideMenuContainer;
