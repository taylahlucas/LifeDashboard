import React from 'react';
import { Text, View } from 'react-native';
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../../utils/constants';
import DraggableList from '../Draggable/DraggableList.native';
import DashboardCardHeader from './CardHeader/DashboardCardHeader.native';
import { DashboardData } from '../../data/mockData.native';
import StandardLayout from '../../common/layouts/StandardLayout.native';

interface DashboardCardProps {
  item: DashboardData;
}

const DashboardCard = ({ item }: DashboardCardProps) => {
  return(
    <StandardLayout title={item.name}>
      <DraggableList />
    </StandardLayout>
  );
};

export default DashboardCard;