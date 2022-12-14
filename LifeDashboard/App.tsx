import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Dashboards from './src/modules/components/Dashboard/Dashboards.native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  SafeAreaView,
  useColorScheme,
} from 'react-native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  // TODO: Change this to color of current dashboard
  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaView style={backgroundStyle}>
          <Dashboards />
        </SafeAreaView>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
};

export default App;
