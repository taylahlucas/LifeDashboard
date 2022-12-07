import React from 'react';
import { View } from 'react-native';
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../../utils/constants';
import useSwipe from './hooks/useSwipe.native';
import DashboardWidget from '../DashboardWidgets/DashboardWidget.native';

const DashboardCard: React.FunctionComponent = () => {
  const onSwipeLeft = () => {
    console.log("SWIPE LEFT")
  }

  const onSwipeRight = () => {
    console.log("SWIPE RIGHT")
  }

  const { onTouchStart, onTouchEnd } = useSwipe(onSwipeLeft, onSwipeRight, 6)
  // TODO: Round corners, make swipeable
  return(
    <View 
      style={{ 
        width: WINDOW_WIDTH, 
        backgroundColor: '#3E3C3C',
        borderRadius: 5,
        alignItems: 'center',
      }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <DashboardWidget backgroundColor={'#F290AA'} />
      <DashboardWidget /> 
      <DashboardWidget backgroundColor={'#1EE6D3'}/>
      <DashboardWidget backgroundColor={'#CAA3F9'} />
    </View>
  );
};

export default DashboardCard;