import React from 'react';
import { Text, ViewStyle } from 'react-native';
import { CustomTextStyle } from './CustomTextStyles.native';
import useGetCustomTextStyle from './hooks/useGetCustomTextStyle.native';

interface CustomTextProps {
  label: String;
  textStyle: CustomTextStyle;
  style?: ViewStyle;
}

const CustomText = ({ label, textStyle, style = {}}: CustomTextProps): JSX.Element => {
  return (
    <Text style={{ ...useGetCustomTextStyle(textStyle), ...style}}>{label}</Text>
  );
};

export default CustomText;