import { StyleSheet } from 'react-native';

export enum CustomTextStyle {
  PageTitle,
  Subtitle,
  Paragraph,
  Placeholder,
  InputSingleLine,
  InputParagraph,
  DropdownMenuItem
};

export const customStyles = StyleSheet.create({
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
  dropdownItemText: {
    color: 'white',
    fontSize: 16,
    padding: 10
  },
  placeholderText: {
    fontSize: 20,
    color: '#888888',
    paddingLeft: 10,
    paddingRight: 20,
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
  },
  dropdownContainer: {
    backgroundColor: '#464444',
    borderRadius: 5,
    width: 150,
    height: 40
  },
  dropdownTxtContainer: {
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'flex-start', 
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  dropdownMenuContainer: {
    flex: 1,
    backgroundColor: '#464444',
    position: 'absolute',
    width: 150,
    zIndex: 3
  },
  dropdownMenuItem: {
    padding: 10,
  }
});