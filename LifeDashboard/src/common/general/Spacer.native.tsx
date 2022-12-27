import React from 'react';
import { View } from 'react-native';

interface SpacerProps {
  height: number;
};

const Spacer = ({ height }: SpacerProps): JSX.Element => {
  return (
    <View style={{ zIndex: -1, height: height }} />
  );
};

export default Spacer;