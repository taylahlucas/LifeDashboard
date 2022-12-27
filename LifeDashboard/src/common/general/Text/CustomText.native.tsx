import React from 'react';
import { Pressable, Text, ViewStyle } from 'react-native';
import { CustomTextStyle } from '../CustomStyles.native';
import useGetCustomTextStyle from '../hooks/useGetCustomTextStyle.native';

interface CustomTextProps {
  label: string;
  textStyle: CustomTextStyle;
  style?: ViewStyle;
  onPress?: () => void;
}

const CustomText = ({ label, textStyle, style = {}, onPress }: CustomTextProps): JSX.Element => {
  return (
    <Pressable onPress={onPress}>
      <Text style={{ ...useGetCustomTextStyle(textStyle), ...style}}>{label}</Text>
    </Pressable>
  );
};

export default CustomText;