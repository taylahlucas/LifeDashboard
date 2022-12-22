import React from 'react';
import { View } from 'react-native';
import DashboardMenuItem from './DashboardMenuItem.native';
import dashboardMenuStyles from'./DashboardMenuStyles.native';
import { widgetData } from '../../../data/widgetData.native';
import { useReactNavigation, PageEnum } from '../../../navigation/hooks/useReactNavigation.native';

const DashboardMenuContainer: React.FunctionComponent = () => {
  const navigation = useReactNavigation();

  return (
    <>
      <View style={dashboardMenuStyles.container} />
      <View style={dashboardMenuStyles.row}>
        {widgetData.map(widget => 
          <DashboardMenuItem 
            key={widget.type}
            style={{ 
              ...dashboardMenuStyles.box, 
              backgroundColor: widget.backgroundColor 
            }} 
            item={widget}
            onPress={(): void => navigation.navigate(PageEnum.Quotes)}
          />)
        }
      </View>
    </>
  );
};

export default DashboardMenuContainer;
