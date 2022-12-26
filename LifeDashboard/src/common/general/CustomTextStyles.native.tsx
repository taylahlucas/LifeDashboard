import { StyleSheet } from 'react-native';

export enum CustomTextStyle {
  PageTitle,
  Subtitle,
  Paragraph
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
  },
  paragraph: {
    color: 'white',
    fontSize: 20,
    padding: 10,
    overflow: 'scroll'
  }
});