import React from 'react';
import { View, ScrollView } from 'react-native';
import { customStyles } from '../CustomStyles.native';
import CustomDropdownMenuItem from './CustomDropdownMenuItem.native';

interface CustomDropdownViewProps {
  options: any[];
  selectedItems: any[];
  itemAction:  (item: any) => void;
};

const CustomDropdownView = ({ options, selectedItems, itemAction }: CustomDropdownViewProps): JSX.Element => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={customStyles.dropdownMenuContainer}>
        {options.map(item =>
          <CustomDropdownMenuItem 
            key={item.id}
            label={item.label}
            item={item}
            isSelected={selectedItems.includes(item)}
            onPress={itemAction}
          />
        )}
      </ScrollView>
    </View>
  );
};

export default CustomDropdownView;