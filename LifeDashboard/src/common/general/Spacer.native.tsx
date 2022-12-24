import React from 'react';
import { View } from 'react-native';

interface SpacerProps {
  height: number;
};

const Spacer = ({ height }: SpacerProps): JSX.Element => {
  return (
    <View style={{ height: height }} />
  );
};

export default Spacer;