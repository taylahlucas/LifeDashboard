import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import QuotesScreen from '../components/Quotes/QuotesScreen.native';
import DashboardsHome from '../components/Dashboard/DashboardsHome.native';

const MenuStack = createNativeStackNavigator();

const MenuStackNavigator = () => {
  return (
    <MenuStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}
    >
      <MenuStack.Screen name="Home" component={DashboardsHome} />
      <MenuStack.Screen name="Quotes" component={QuotesScreen} />
    </MenuStack.Navigator>
  );
};

export default MenuStackNavigator;