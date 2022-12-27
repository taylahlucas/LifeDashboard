import React from 'react';
import CustomText from '../../common/general/Text/CustomText.native';
import { CustomTextStyle } from '../../common/general/CustomStyles.native';
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
        label={quote} 
        textStyle={CustomTextStyle.Paragraph}
      />
    </QuotesWidgetContainer>
  );
};

export default QuotesWidget;