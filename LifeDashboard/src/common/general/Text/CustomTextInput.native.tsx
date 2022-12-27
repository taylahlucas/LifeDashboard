import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { CustomTextStyle, customStyles } from '../CustomStyles.native';
import InputClearButton from '../../buttons/InputClearButton.native';
import useGetCustomTextStyle from '../hooks/useGetCustomTextStyle.native';

interface CustomTextInputProps {
  textStyle: CustomTextStyle;
  placeholder?: string;
  maxLength?: number;
  height?: number;
  multiline?: boolean;
}

const CustomTextInput = ({ 
  textStyle, 
  placeholder = '', 
  maxLength = 100,
  height = 20,
  multiline = false,
}: CustomTextInputProps): JSX.Element => {
  const [value, setValue] = useState('')

  return (
    <View style={customStyles.inputContainer}>
      {/* // TODO: Animate button showing */}
      {value.length > 0 ? <InputClearButton style={customStyles.inputClearBtn} onPress={(): void =>  setValue('')} /> : null}
      <TextInput 
        style={{ ...useGetCustomTextStyle(textStyle), height: height }}
        editable
        maxLength={maxLength}
        multiline={multiline}
        placeholder={placeholder}
        placeholderTextColor={'#888888'}
        value={value}
        onChangeText={(text): void => setValue(text)}
      />
    </View>
  );
};

export default CustomTextInput;