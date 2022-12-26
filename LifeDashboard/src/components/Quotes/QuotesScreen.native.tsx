import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import Spacer from '../../common/general/Spacer.native';
import StandardLayout from '../../common/layouts/StandardLayout.native';
import { useReactNavigation } from '../../navigation/hooks/useReactNavigation.native';
import QuotesWidget from './QuotesWidget.native';
import QuotesPopup from './QuotesPopup.native';

const QuotesScreen = () => {
  const navigation = useReactNavigation();
  const [addQuote, addQuotePressed] = useState(false)
  
  return (
    <StandardLayout 
      title={'Quotes'} 
      headerAction={(): void => navigation.goBack()}
      footerAction={(): void => addQuotePressed(true)}
      isPopupVisible={addQuote}
    >
      <Spacer height={10} />
      <ScrollView>
        <QuotesWidget quote={'The greatest glory in living lies not in never falling, but in rising every time we fall.'} author={''} />
        <QuotesWidget quote={'The greatest glory in living lies not in never falling, but in rising every time we fall.'} author={''} />
        <QuotesWidget quote={'The greatest glory in living lies not in never falling, but in rising every time we fall.'} author={''} />
        <QuotesWidget quote={'The greatest glory in living lies not in never falling, but in rising every time we fall.'} author={''} />
      </ScrollView>
      <QuotesPopup 
        isVisible={addQuote} 
        onConfirm={(): void => addQuotePressed(!addQuote)} 
      />
    </StandardLayout>
  );
};

export default QuotesScreen;