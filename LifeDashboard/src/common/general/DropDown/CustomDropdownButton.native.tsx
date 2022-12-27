import React, { useState } from 'react';
import { Pressable, View } from 'react-native';
import { customStyles, CustomTextStyle } from '../CustomStyles.native';
import CustomText from '../Text/CustomText.native';
import IconButton from '../../buttons/IconButton.native';

interface CustomDropdownButtonProps {
  placeholder: string;
  isOpen: boolean;
  onPress: (openMenu: boolean) => void;
}

const CustomDropdownButton = ({ placeholder, isOpen, onPress }: CustomDropdownButtonProps): JSX.Element => {
  return (
    <Pressable style={customStyles.dropdownContainer}> 
      <View style={customStyles.dropdownTxtContainer}>
        {/* // TODO: Make this changable color */}
        <View style={{ backgroundColor: 'red', width: 10, height: 10, borderRadius: 10 }} />
        <CustomText
          label={placeholder} 
          textStyle={CustomTextStyle.Placeholder} 
        />
        <IconButton 
          name='chevron-down-outline'
          onPress={(): void => onPress(!isOpen)}
          height={20}
        />
      </View>
    </Pressable>
  );
};

export default CustomDropdownButton;