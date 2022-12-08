import React from 'react';
import { View } from 'react-native';
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../../utils/constants';
import useSwipe from './hooks/useSwipe.native';
import DraggableList from '../Draggable/DraggableList.native';

const DashboardCard: React.FunctionComponent = () => {
  const onSwipeLeft = () => {
    console.log("SWIPE LEFT")
  }

  const onSwipeRight = () => {
    console.log("SWIPE RIGHT")
  }

  const { onTouchStart, onTouchEnd } = useSwipe(onSwipeLeft, onSwipeRight, 6)

  return(
    <View 
      style={{ 
        width: WINDOW_WIDTH, 
        minHeight: WINDOW_HEIGHT,
        backgroundColor: '#3E3C3C',
        borderRadius: 5,
        alignItems: 'center'
      }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <DraggableList />
    </View>
  );
};

export default DashboardCard;