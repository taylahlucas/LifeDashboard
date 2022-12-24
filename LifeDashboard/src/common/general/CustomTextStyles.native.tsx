import { StyleSheet } from 'react-native';

export enum CustomTextStyle {
  PageTitle,
  Subtitle
};

export const customTextStyles = StyleSheet.create({
  pageTitle: {
    top: 95,
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 16
  }
});