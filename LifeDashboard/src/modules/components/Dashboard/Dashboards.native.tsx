import React from 'react';
import { View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { useSharedValue } from 'react-native-reanimated';
import { WINDOW_WIDTH, WINDOW_HEIGHT } from '../../../utils/constants';
import DashboardCard from './DashboardCard.native';
import mockData from '../../../data/mockData.native';
import DashboardMenu from '../DashboardMenu/DashboardMenu.native';

const Dashboards: React.FunctionComponent = () => {
  const isCarousel = React.useRef(mockData.length > 1);
  const progressValue = useSharedValue<number>(0);

  const baseOptions = {
    vertical: false,
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT
  }
  
  return(
    <View style={{ alignItems: 'center' }}>
        <DashboardMenu />
        <Carousel
          {...baseOptions}
          pagingEnabled={isCarousel.current}
          snapEnabled={isCarousel.current}
          onProgressChange={(_, absoluteProgress) =>
            (progressValue.value = absoluteProgress)
          }
          data={mockData}
          renderItem={({ index, item }) => <DashboardCard key={index} item={item} />}
        />
    </View>
  );
};

export default Dashboards;