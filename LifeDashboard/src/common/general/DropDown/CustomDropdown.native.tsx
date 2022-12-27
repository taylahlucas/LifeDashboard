import React, { useState } from 'react';
import CustomDropdownButton from './CustomDropdownButton.native';
import CustomDropdownView from './CustomDropdownView.native';

interface CustomDropdownProps {
  placeholder: string;
  options: any[];
  // TODO: Move this to redux state
  setCurrentValue: (value: string) => void;
  currentValue?: string;
}

const CustomDropdown = ({ placeholder, options, setCurrentValue, currentValue }: CustomDropdownProps): JSX.Element => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <CustomDropdownButton 
        placeholder={currentValue || placeholder}
        isOpen={openMenu}
        onPress={setOpenMenu}
      />
      {openMenu ?
        <CustomDropdownView options={options} setCurrentValue={setCurrentValue} />
        :
        null
      }
      
    </>
  );
};

export default CustomDropdown;