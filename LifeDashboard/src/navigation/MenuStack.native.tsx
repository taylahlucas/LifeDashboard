import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import QuotesScreen from '../modules/components/Quotes/QuotesScreen.native';
import DashboardsHome from '../modules/components/Dashboard/DashboardsHome.native';

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