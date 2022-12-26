import { CustomTextStyle, customTextStyles } from '../CustomTextStyles.native';

function useGetCustomTextStyle(style: CustomTextStyle) {
  switch (style) {
    case CustomTextStyle.PageTitle: return customTextStyles.pageTitle
    case CustomTextStyle.Subtitle: return customTextStyles.subtitle
    case CustomTextStyle.Paragraph: return customTextStyles.paragraph
    case CustomTextStyle.InputSingleLine: return customTextStyles.inputSingleLine
    case CustomTextStyle.InputParagraph: return customTextStyles.inputParagraph
  };
}

export default useGetCustomTextStyle;