import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import { useSharedValue } from 'react-native-reanimated';
import * as Size from '../../utils/constants/sizes.native';
import DashboardCard from './DashboardCard.native';
import { dashboardData } from '../../data/mockData.native';
import Spacer from '../../common/general/Spacer.native';
import StandardLayout from '../../common/layouts/StandardLayout.native';

const Dashboards: React.FunctionComponent = () => {
  const isCarousel = React.useRef(dashboardData.length > 1);
  const progressValue = useSharedValue<number>(0);

  const baseOptions = {
    vertical: false,
    width: Size.WINDOW_WIDTH,
    height: Size.WINDOW_HEIGHT
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
        data={dashboardData}
        renderItem={({ index, item }) => <DashboardCard key={index} item={item} />}
      />
    </StandardLayout>
  );
};

export default Dashboards;