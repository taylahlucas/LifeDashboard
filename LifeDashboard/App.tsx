import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MenuStackNavigator from './src/navigation/MenuStack.native';
import SideMenu from './src/common/menus/SideMenu/SideMenu.native';
import { Provider } from 'react-redux';
import configureStore from './src/utils/redux/store';

const App = () => {
  return (
    <Provider store={configureStore}>
      <NavigationContainer>
        <SideMenu />
        <MenuStackNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
