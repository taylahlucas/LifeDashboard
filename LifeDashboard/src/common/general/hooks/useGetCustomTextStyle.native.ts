import { CustomTextStyle, customTextStyles } from '../CustomTextStyles.native';

function useGetCustomTextStyle(style: CustomTextStyle) {
  switch (style) {
    case CustomTextStyle.PageTitle: return customTextStyles.pageTitle
    case CustomTextStyle.Subtitle: return customTextStyles.subtitle
  };
}

export default useGetCustomTextStyle;