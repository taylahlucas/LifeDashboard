import React from 'react';
import { useSharedValue } from 'react-native-reanimated';
import { WINDOW_WIDTH, WINDOW_HEIGHT } from '../../../utils/constants';
import mockData from '../../../data/mockData.native';
import Dashboards from '../Dashboard/Dashboards.native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native';

const DashboardsHome: React.FunctionComponent = () => {
  const isDarkMode = useColorScheme() === 'dark';
  // TODO: Change this to color of current dashboard
  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  
  return(
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={backgroundStyle}>
        <Dashboards />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default DashboardsHome;