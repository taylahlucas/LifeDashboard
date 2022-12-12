import React, { useState } from 'react';
import { View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { useSharedValue } from 'react-native-reanimated';
import { WINDOW_WIDTH, WINDOW_HEIGHT } from '../../utils/constants';
import DashboardCard from './DashboardCard.native';
import mockData, { DashboardData } from '../../data/mockData.native';

const Dashboards: React.FunctionComponent = () => {
  const isCarousel = React.useRef(false);
  const progressValue = useSharedValue<number>(0);

  const baseOptions = {
    vertical: false,
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT
  }
  
  return(
    <View style={{ alignItems: 'center' }}>
      <Carousel
        {...baseOptions}
        mode="parallax"
        pagingEnabled={isCarousel.current}
        snapEnabled={isCarousel.current}
        onProgressChange={(_, absoluteProgress) =>
          (progressValue.value = absoluteProgress)
        }
        data={mockData}
        renderItem={({ index, item }) => <DashboardCard key={index} item={item} />}
      />
      {!!progressValue && (
        <View 
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: 100,
            alignSelf: 'center',
          }}></View>
      )}
    </View>
  );
};

// onChangeIndex={(index: number, fromIndex: number): void => setIndex(index)}>

// {mockData.map((item: DashboardData) => 
//   <DashboardCard 
//     key={item.id}
//     item={item}
//     children={item}
//   />  
// )}

export default Dashboards;