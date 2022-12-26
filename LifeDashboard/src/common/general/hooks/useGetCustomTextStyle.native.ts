import { CustomTextStyle, customTextStyles } from '../CustomTextStyles.native';

function useGetCustomTextStyle(style: CustomTextStyle) {
  switch (style) {
    case CustomTextStyle.PageTitle: return customTextStyles.pageTitle
    case CustomTextStyle.Subtitle: return customTextStyles.subtitle
    case CustomTextStyle.Paragraph: return customTextStyles.paragraph
  };
}

export default useGetCustomTextStyle;