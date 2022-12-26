import { StyleSheet } from 'react-native';

export enum CustomTextStyle {
  PageTitle,
  Subtitle,
  Paragraph,
  InputSingleLine,
  InputParagraph
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
  },
  inputContainer: {
    backgroundColor: '#464444',
    color: 'white',
    borderRadius: 5,
    fontSize: 20,
    padding: 15
  },
  inputClearBtn: {
    position: 'absolute', 
    alignSelf: 'flex-end',
    padding: 10,
    zIndex: 3
  },
  inputSingleLine: {
    color: 'white',
    fontSize: 20,
    paddingLeft: 10,
    paddingRight: 40
  },
  inputParagraph: {
    color: 'white',
    fontSize: 20,
    padding: 10
  }
});