import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import Spacer from '../../common/general/Spacer.native';
import StandardLayout from '../../common/layouts/StandardLayout.native';
import { useReactNavigation } from '../../navigation/hooks/useReactNavigation.native';
import QuotesWidget from './QuotesWidget.native';
import AddWidgetPopup from '../../common/layouts/AddWidgetPopup.native';
import CustomText from '../../common/general/CustomText.native';
import { CustomTextStyle } from '../../common/general/CustomTextStyles.native';

const QuotesScreen = () => {
  const navigation = useReactNavigation();
  const [addQuote, addQuotePressed] = useState(false)
  
  return (
    <StandardLayout 
      title={'Quotes'} 
      headerAction={(): void => navigation.goBack()}
      footerAction={(): void => addQuotePressed(true)}
    >
      <Spacer height={10} />
      <ScrollView>
        <QuotesWidget quote={'The greatest glory in living lies not in never falling, but in rising every time we fall.'} author={''} />
        <QuotesWidget quote={'The greatest glory in living lies not in never falling, but in rising every time we fall.'} author={''} />
        <QuotesWidget quote={'The greatest glory in living lies not in never falling, but in rising every time we fall.'} author={''} />
        <QuotesWidget quote={'The greatest glory in living lies not in never falling, but in rising every time we fall.'} author={''} />
      </ScrollView>
      <AddWidgetPopup title={'Add Quote'} isVisible={addQuote}>
        <CustomText label={'Test'} textStyle={CustomTextStyle.Paragraph} />
      </AddWidgetPopup>
    </StandardLayout>
  );
};

export default QuotesScreen;