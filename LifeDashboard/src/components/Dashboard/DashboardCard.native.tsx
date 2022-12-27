import React from 'react';
import DraggableList from '../Draggable/DraggableList.native';
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