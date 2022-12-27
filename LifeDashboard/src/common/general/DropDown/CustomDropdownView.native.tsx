import React from 'react';
import { View, ScrollView } from 'react-native';
import { customStyles } from '../CustomStyles.native';
import CustomDropdownMenuItem from './CustomDropdownMenuItem.native';

interface CustomDropdownViewProps {
  options: any[];
  setCurrentValue: (value: string) => void;
};

const CustomDropdownView = ({ options, setCurrentValue }: CustomDropdownViewProps): JSX.Element => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={customStyles.dropdownMenuContainer}>
        {options.map(item =>
          <CustomDropdownMenuItem 
            label={item.label}
            onPress={setCurrentValue}
          />
        )}
      </ScrollView>
    </View>
  );
};

export default CustomDropdownView;