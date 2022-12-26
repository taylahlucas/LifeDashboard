import { useRef } from 'react';
import { NavigationContainer, ParamListBase } from "@react-navigation/native";
import { useNavigation, useNavigationState } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export enum PageEnum {
  Home = 'Home',
  Quotes = 'Quotes'
};

export interface Navigation {
  navigate: (page: PageEnum, params?: any) => void,
  goBack: () => void,
  backToFirstScreen?: () => void;
};

export const useReactNavigation = (): Navigation => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  
  return useRef({
    navigate: (page: PageEnum, params?: any): void => navigation.navigate(page, params),
    goBack: (): void => navigation.goBack(),
    backToFirstScreen: (): void => navigation.popToTop()
  }).current;
};