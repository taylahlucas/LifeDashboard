import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MenuStackNavigator from './src/navigation/MenuStack.native';
import SideMenu from './src/common/menus/SideMenu/SideMenu.native';

const App = () => {
  return (
    <NavigationContainer>
      <SideMenu />
      <MenuStackNavigator />
    </NavigationContainer>
  );
};

export default App;
