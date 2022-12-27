import React from 'react';
import { View, Pressable } from 'react-native';
import { customStyles, CustomTextStyle } from '../CustomStyles.native';
import CustomText from '../Text/CustomText.native';

interface CustomDropdownMenuItemProps {
  label: string;
  onPress: (value: string) => void;
};

const CustomDropdownMenuItem = ({ label, onPress }: CustomDropdownMenuItemProps): JSX.Element => {
  return (
    <Pressable 
      style={customStyles.dropdownTxtContainer} 
      onPress={(): void => onPress(label)} 
    >
      {/* // TODO: Custom color */}
      <View style={{ backgroundColor: 'red', width: 10, height: 10, borderRadius: 10 }} />
      <CustomText 
        label={label}
        textStyle={CustomTextStyle.DropdownMenuItem}
        
      />
    </Pressable>
  );
};

export default CustomDropdownMenuItem;