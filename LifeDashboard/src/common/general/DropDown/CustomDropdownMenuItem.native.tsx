import React from 'react';
import { View, Pressable } from 'react-native';
import CircleTickButton from '../../buttons/CircleTickButton.native';
import { customStyles, CustomTextStyle } from '../CustomStyles.native';
import CustomText from '../Text/CustomText.native';

interface CustomDropdownMenuItemProps {
  label: string;
  item: any;
  isSelected: boolean;
  onPress:  (item: any) => void;
};

const CustomDropdownMenuItem = ({ label, item, isSelected = false, onPress }: CustomDropdownMenuItemProps): JSX.Element => {
  return (
    <Pressable 
      style={customStyles.dropdownTxtContainer} 
      onPress={(): void => {
        onPress(item)
      }} 
    >
      {/* // TODO: Custom color */}
      <View style={{ backgroundColor: 'red', width: 10, height: 10, borderRadius: 10 }} />
      <CustomText 
        label={label}
        textStyle={CustomTextStyle.DropdownMenuItem}
      />
      <CircleTickButton 
        style={{ position: 'absolute' , right: 0 }}
        isSelected={isSelected}
        // TODO: Add button highlight when selected
        onPress={(): void => {}} />
    </Pressable>
  );
};

export default CustomDropdownMenuItem;