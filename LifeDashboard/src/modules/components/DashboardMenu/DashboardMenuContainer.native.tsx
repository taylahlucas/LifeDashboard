import React from 'react';
import { View } from 'react-native';
import DashboardMenuItem from './DashboardMenuItem.native';
import dashboardMenuStyles from'./DashboardMenuStyles.native';
import widgetData from '../../../data/widgetData.native';

const DashboardMenuContainer: React.FunctionComponent = () => {
  return (
    <View style={dashboardMenuStyles.container}>
      <View style={dashboardMenuStyles.row}>
        {widgetData.map(widget => 
          <DashboardMenuItem 
            key={widget.type}
            style={{ 
              ...dashboardMenuStyles.box, 
              backgroundColor: widget.backgroundColor 
            }} 
            icon={widget.icon}
          />)
        }
      </View>
    </View>
  );
};

export default DashboardMenuContainer;
