import React from 'react';
import StandardLayout from '../../common/layouts/StandardLayout.native';
import { useReactNavigation } from '../../navigation/hooks/useReactNavigation.native';

const QuotesScreen = () => {
  const navigation = useReactNavigation();
  return (
    <StandardLayout 
      title={'Quotes'} 
      headerAction={(): void => navigation.goBack()}
    >

    </StandardLayout>
  );
};

export default QuotesScreen;