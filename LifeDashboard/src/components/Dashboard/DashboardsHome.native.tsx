import React from 'react';
import Dashboards from './Dashboards.native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native';

const DashboardsHome: React.FunctionComponent = () => {
  const isDarkMode = useColorScheme() === 'dark';
  
  const backgroundStyle = {
    flex: 1,
    backgroundColor: '#3E3C3C',
    // backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
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