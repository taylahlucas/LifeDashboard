import React from 'react';
import { Text, View } from 'react-native';
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../../../utils/constants';
import DraggableList from '../Draggable/DraggableList.native';
import DashboardCardHeader from './CardHeader/DashboardCardHeader.native';
import { DashboardData } from '../../../data/mockData.native';

interface DashboardCardProps {
  item: DashboardData;
}

const DashboardCard = ({ item }: DashboardCardProps) => {
  return(
    <View 
      style={{ 
        width: WINDOW_WIDTH, 
        minHeight: WINDOW_HEIGHT,
        backgroundColor: '#3E3C3C',
        borderRadius: 5,
        alignItems: 'center'
      }}
    >
      <DashboardCardHeader title={item.name} />
      <DraggableList />
    </View>
  );
};

export default DashboardCard;