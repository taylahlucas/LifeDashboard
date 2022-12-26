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
    >
      <Spacer height={10} />
      {/* // TODO: Add plus button & quotes container */}
      <ScrollView>
        <QuotesWidget />
        <QuotesWidget />
        <QuotesWidget />
        <QuotesWidget />
        <QuotesWidget />
      </ScrollView>
    </StandardLayout>
  );
};

export default QuotesScreen;