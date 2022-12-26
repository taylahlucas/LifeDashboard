import React from 'react';
import { View } from 'react-native';
import CustomText from '../../common/general/CustomText.native';
import { CustomTextStyle } from '../../common/general/CustomTextStyles.native';
import QuotesWidgetContainer from './QuotesWidgetContainer.native';

interface QuotesWidgetInterface {
  quote: string,
  author: string,
  // tags: Tag[]
};

const QuotesWidget = ({ quote, author }: QuotesWidgetInterface): JSX.Element => {
  return (
    <QuotesWidgetContainer>
      <CustomText 
        label={'The greatest glory in living lies not in never falling, but in rising every time we fall.'} 
        textStyle={CustomTextStyle.Paragraph}
      />
    </QuotesWidgetContainer>
  );
};

export default QuotesWidget;