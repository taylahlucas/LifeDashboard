import { StyleSheet } from 'react-native';
import { WINDOW_WIDTH } from '../../utils/constants';

export enum CustomTextStyle {
  PageTitle,
  Subtitle
};

export const customTextStyles = StyleSheet.create({
  pageTitle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16
  }
});