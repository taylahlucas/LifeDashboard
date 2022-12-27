import React, { useState } from 'react';
import CustomDropdownButton from './CustomDropdownButton.native';
import CustomDropdownView from './CustomDropdownView.native';

interface CustomDropdownProps {
  placeholder: string;
  options: any[];
  selectedItems: any[];
  itemAction: (item: any) => void;
}

const CustomDropdown = ({ placeholder, options, selectedItems, itemAction }: CustomDropdownProps): JSX.Element => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <CustomDropdownButton 
        placeholder={placeholder}
        isOpen={openMenu}
        onPress={setOpenMenu}
      />
      {openMenu ?
        <CustomDropdownView 
          options={options} 
          selectedItems={selectedItems}
          itemAction={itemAction}
        />
        :
        null
      }
      
    </>
  );
};

export default CustomDropdown;