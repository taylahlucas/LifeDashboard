import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import QuotesScreen from '../components/Quotes/QuotesScreen.native';
import Dashboards from '../components/Dashboard/Dashboards.native';

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
      <MenuStack.Screen name="Quotes" component={QuotesScreen} />
    </MenuStack.Navigator>
  );
};

export default MenuStackNavigator;