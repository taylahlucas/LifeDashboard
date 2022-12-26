import React from 'react';
import { ScrollView } from 'react-native';
import Spacer from '../../common/general/Spacer.native';
import StandardLayout from '../../common/layouts/StandardLayout.native';
import { useReactNavigation } from '../../navigation/hooks/useReactNavigation.native';
import QuotesWidget from './QuotesWidget.native';

const QuotesScreen = () => {
  const navigation = useReactNavigation();
  
  return (
    <StandardLayout 
      title={'Quotes'} 
      headerAction={(): void => navigation.goBack()}
      footerAction={(): void => navigation.goBack()}
    >
      <Spacer height={10} />
      <ScrollView>
        <QuotesWidget quote={'The greatest glory in living lies not in never falling, but in rising every time we fall.'} author={''} />
        <QuotesWidget quote={'The greatest glory in living lies not in never falling, but in rising every time we fall.'} author={''} />
        <QuotesWidget quote={'The greatest glory in living lies not in never falling, but in rising every time we fall.'} author={''} />
        <QuotesWidget quote={'The greatest glory in living lies not in never falling, but in rising every time we fall.'} author={''} />
      </ScrollView>
    </StandardLayout>
  );
};

export default QuotesScreen;