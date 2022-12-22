import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MenuStackNavigator from './src/navigation/MenuStack.native';

const App = () => {
  return (
    <NavigationContainer>
      <MenuStackNavigator />
    </NavigationContainer>
  );
};

export default App;
