import React, { useState } from 'react';
import Spacer from '../../common/general/Spacer.native';
import AddWidgetPopup from '../../common/layouts/AddWidgetPopup.native';
import { CustomTextStyle } from '../../common/general/CustomStyles.native';
import CustomTextInput from '../../common/general/Text/CustomTextInput.native';
import { tagData } from '../../data/mockData.native';
import CustomDropdown from '../../common/general/DropDown/CustomDropdown.native';

interface QuotesPopupProps {
  isVisible: boolean;
  onConfirm: () => void;
};
// TODO: Fix set current value of tag list
const QuotesPopup = ({ isVisible, onConfirm }: QuotesPopupProps) => {
  const [currentValue, assignValue] = useState('');

  const setCurrentValue = (value: string) => {
    assignValue(value);
  };

  return (
    <AddWidgetPopup 
      title={'Add Quote'}
      isVisible={isVisible}
      onClose={onConfirm}
    >
      <Spacer height={25} /> 
      <CustomTextInput 
        textStyle={CustomTextStyle.InputParagraph}
        placeholder={'Enter quote...'} 
        maxLength={500}
        height={125}
        multiline={true}
      />
      <Spacer height={10} />
      <CustomTextInput
        placeholder={'Author...'} 
        textStyle={CustomTextStyle.InputSingleLine}
      />
      <Spacer height={25} /> 
      <CustomDropdown
        placeholder={'tags'}
        options={tagData}
        setCurrentValue={setCurrentValue}
        currentValue={currentValue}
      />
      <Spacer height={50} />
    </AddWidgetPopup>
  );
};

export default QuotesPopup;