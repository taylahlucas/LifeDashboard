import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import { useSharedValue } from 'react-native-reanimated';
import { WINDOW_WIDTH, WINDOW_HEIGHT } from '../../utils/constants';
import DashboardCard from './DashboardCard.native';
import mockData from '../../data/mockData.native';
import Spacer from '../../common/general/Spacer.native';
import StandardLayout from '../../common/layouts/StandardLayout.native';

const Dashboards: React.FunctionComponent = () => {
  const isCarousel = React.useRef(mockData.length > 1);
  const progressValue = useSharedValue<number>(0);

  const baseOptions = {
    vertical: false,
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT
  }
  
  return(
    <StandardLayout>
      <Spacer height={35} />
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
    </StandardLayout>
  );
};

export default Dashboards;