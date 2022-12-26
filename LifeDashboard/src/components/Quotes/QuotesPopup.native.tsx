import React, { useState } from 'react';
import Spacer from '../../common/general/Spacer.native';
import AddWidgetPopup from '../../common/layouts/AddWidgetPopup.native';
import { CustomTextStyle } from '../../common/general/CustomTextStyles.native';
import CustomTextInput from '../../common/general/CustomTextInput.native';

interface QuotesPopupProps {
  isVisible: boolean;
  onConfirm: () => void;
};

const QuotesPopup = ({ isVisible, onConfirm }: QuotesPopupProps) => {
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
      {/* TODOO: Tag dropdown */}
    </AddWidgetPopup>
  );
};

export default QuotesPopup;