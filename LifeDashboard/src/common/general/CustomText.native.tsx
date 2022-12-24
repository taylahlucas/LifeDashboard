import React from 'react';
import { Text } from 'react-native';
import { CustomTextStyle } from './CustomTextStyles.native';
import useGetCustomTextStyle from './hooks/useGetCustomTextStyle.native';

interface CustomTextProps {
  label: string;
  textStyle: CustomTextStyle;
}

const CustomText = ({ label, textStyle}: CustomTextProps): JSX.Element => {
  return (
    <Text style={useGetCustomTextStyle(textStyle)}>{label}</Text>
  );
};

export default CustomText;