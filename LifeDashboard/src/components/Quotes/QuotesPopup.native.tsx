import React, { useState } from 'react';
import Spacer from '../../common/general/Spacer.native';
import AddWidgetPopup from '../../common/layouts/AddWidgetPopup.native';
import { CustomTextStyle } from '../../common/general/CustomStyles.native';
import CustomTextInput from '../../common/general/Text/CustomTextInput.native';
import { TagData, tagData } from '../../data/mockData.native';
import CustomDropdown from '../../common/general/DropDown/CustomDropdown.native';
import useQuoteFormDataState from './hooks/useQuoteFormDataState.native';
import useQuoteFormDataDispatch from './hooks/useQuoteFormDataDispatch.native';

interface QuotesPopupProps {
  isVisible: boolean;
  onConfirm: () => void;
};

const QuotesPopup = ({ isVisible, onConfirm }: QuotesPopupProps) => {
  const { formData } = useQuoteFormDataState();
  const { setFormData } = useQuoteFormDataDispatch();

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
        selectedItems={formData.tags}
        itemAction={(item): void => {
          const tag: TagData = item as TagData;
          setFormData({
            ...formData,
            tags: formData.tags?.includes(tag) 
              ? [...formData.tags.filter((item) => item.id !== tag.id)]
              : [...formData.tags, tag]
          })
        }}
      />
      <Spacer height={50} />
    </AddWidgetPopup>
  );
};

export default QuotesPopup;