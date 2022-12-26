import { useRef } from 'react';
import { ParamListBase } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export enum PageEnum {
  Home = 'Home',
  Quotes = 'Quotes',
  AddQuote = 'Quote'
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