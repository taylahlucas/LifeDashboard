import React from 'react';
import { Text } from 'react-native';

interface DashboardCardTitleProps {
  title?: String;
}

const DashboardCardTitle = ({ title }: DashboardCardTitleProps) => {
  return (
    <Text 
      style={{ 
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        justifyContent: 'center',
        alignContent: 'center', 
        color: 'white'
      }}>
      {title}
    </Text>
  )
};

export default DashboardCardTitle;