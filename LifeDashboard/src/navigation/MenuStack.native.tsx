import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboards from '../components/Dashboard/Dashboards.native';
import QuotesPage from '../components/Quotes/QuotesPage.native';

const MenuStack = createNativeStackNavigator();

const MenuStackNavigator = () => {
  return (
    <MenuStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}
    >
      <MenuStack.Screen name="Home" component={Dashboards} />
      <MenuStack.Screen name="Quotes" component={QuotesPage} />
    </MenuStack.Navigator>
  );
};

export default MenuStackNavigator;