import React from 'react';
import { Pressable, Text } from 'react-native';

const TestButton = (): JSX.Element => {
  return (
    <Pressable style={{ 
      backgroundColor: 'lightblue',
      width: 200,
      borderRadius: 5,
      padding: 10
    }}>
      <Text style={{ color: 'white' }}>
        {'Test text Test text Test text Test text Test text'}
      </Text>
    </Pressable>
  );
};

export default TestButton;