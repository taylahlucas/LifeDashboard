import React from 'react';
import { FlatList, View } from 'react-native';
import { WINDOW_HEIGHT } from '../../utils/constants';
import DashboardMenuItem from './DashboardMenuItem.native';

const widgetData = [
  {
    id: 1,
    name: 'countdown'
  },
  {
    id: 2,
    name: 'lists'
  },
  {
    id: 3,
    name: 'tasks'
  },
  {
    id: 4,
    name: 'goals'
  },
];

const DashboardMenuOpen: React.FunctionComponent = () => {
  const renderItem = ({ item }) => {
    <DashboardMenuItem />
  };
  return (
    <View 
      style={{ 
        position: 'absolute', 
        backgroundColor: 'black', 
        height: WINDOW_HEIGHT, 
        width: 60, 
        top: 0, 
        left: 0, 
        zIndex: 3
      }}>
        {/* <FlatList 
          data={widgetData} 
          renderItem={renderItem}
          keyExtractor={item => item.id}
        /> */}
    </View>
  );
};

export default DashboardMenuOpen;