import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import Spacer from '../../common/general/Spacer.native';
import StandardLayout from '../../common/layouts/StandardLayout.native';
import { useReactNavigation } from '../../navigation/hooks/useReactNavigation.native';
import QuotesWidget from './QuotesWidget.native';
import AddWidgetPopup from '../../common/layouts/AddWidgetPopup.native';
import { CustomTextStyle } from '../../common/general/CustomTextStyles.native';
import CustomTextInput from '../../common/general/CustomTextInput.native';

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
      <AddWidgetPopup title={'Add Quote'} isVisible={addQuote} onClose={addQuotePressed}>
        <Spacer height={20} /> 
        <CustomTextInput 
          textStyle={CustomTextStyle.InputParagraph}
          placeholder={'Enter quote...'} 
          maxLength={500}
          height={125}
          multiline={true}
        />
        <Spacer height={10} />
        <CustomTextInput placeholder={'Author...'} textStyle={CustomTextStyle.InputSingleLine}/>
      </AddWidgetPopup>
    </StandardLayout>
  );
};

export default QuotesScreen;