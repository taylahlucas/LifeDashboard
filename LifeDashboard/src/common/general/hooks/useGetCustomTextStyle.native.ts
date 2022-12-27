import { CustomTextStyle, customStyles } from '../CustomStyles.native';

function useGetCustomTextStyle(style: CustomTextStyle) {
  switch (style) {
    case CustomTextStyle.PageTitle: return customStyles.pageTitle
    case CustomTextStyle.Subtitle: return customStyles.subtitle
    case CustomTextStyle.Paragraph: return customStyles.paragraph
    case CustomTextStyle.Placeholder: return customStyles.placeholderText
    case CustomTextStyle.InputSingleLine: return customStyles.inputSingleLine
    case CustomTextStyle.InputParagraph: return customStyles.inputParagraph
    case CustomTextStyle.DropdownMenuItem: return customStyles.dropdownItemText
  };
}

export default useGetCustomTextStyle;