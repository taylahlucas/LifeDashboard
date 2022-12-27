import { StyleSheet } from 'react-native';
import * as Font from '../../utils/constants/fonts.native';
import * as Padding from '../../utils/constants/padding.native';
import * as Colors from '../../utils/constants/colors.native';

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
    color: Colors.lightWhite,
    textAlign: 'center',
    fontSize: Font.headingFontSize,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: Font.medFontSize
  },
  paragraph: {
    color: Colors.lightWhite,
    fontSize: Font.largeFontSize,
    padding: Padding.defaultPaddingMed,
    overflow: 'scroll'
  },
  dropdownItemText: {
    color: Colors.lightWhite,
    fontSize: Font.medFontSize,
    padding: Padding.defaultPaddingMed
  },
  placeholderText: {
    fontSize: Font.largeFontSize,
    color: Colors.lightGrey,
    paddingLeft: Padding.defaultPaddingMed,
    paddingRight: Padding.defaultPaddingLong,
  },
  multiLineContainer: {
    backgroundColor: Colors.medGrey,
    color: Colors.lightWhite,
    borderRadius: Padding.defaultBorderRadius,
    fontSize: Font.largeFontSize,
    padding: Padding.defaultPaddingMed,
  },
  singleLineContainer: {
    backgroundColor: Colors.medGrey,
    color: Colors.lightWhite,
    borderRadius: Padding.defaultBorderRadius,
    fontSize: Font.largeFontSize,
    padding: Padding.defaultPaddingMed,
    justifyContent: 'center'
  },
  inputClearBtn: {
    position: 'absolute', 
    alignSelf: 'flex-end',
    padding: Padding.defaultPaddingMed,
    zIndex: 3
  },
  inputSingleLine: {
    color: Colors.lightWhite,
    fontSize: Font.largeFontSize,
    paddingLeft: Padding.defaultPaddingMed,
    paddingRight: Padding.defaultPaddingLong * 2
  },
  inputParagraph: {
    color: Colors.lightWhite,
    fontSize: Font.largeFontSize,
    padding: Padding.defaultPaddingMed
  },
  dropdownContainer: {
    backgroundColor: Colors.medGrey,
    borderRadius: Padding.defaultBorderRadius,
    width: 115,
    height: Padding.defaultPaddingLong * 2,
  },
  dropdownTxtContainer: {
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: Padding.defaultPaddingMed,
    marginRight: Padding.defaultPaddingMed
  },
  dropdownMenuContainer: {
    flex: 1,
    backgroundColor: Colors.medGrey,
    position: 'absolute',
    width: 150,
    zIndex: 3
  },
  dropdownMenuItem: {
    padding: Padding.defaultPaddingMed,
  }
});