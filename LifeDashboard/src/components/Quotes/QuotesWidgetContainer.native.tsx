import React from 'react';
import { ScrollView } from 'react-native';
import quotesStyles from './QuotesStyles.native';

interface QuotesWidgetContainerProps {
  children: any;
}

const QuotesWidgetContainer = ({ children }: QuotesWidgetContainerProps): JSX.Element => {
  return (
    <ScrollView style={quotesStyles.container}>
      {children}
    </ScrollView>
  );
};

export default QuotesWidgetContainer;