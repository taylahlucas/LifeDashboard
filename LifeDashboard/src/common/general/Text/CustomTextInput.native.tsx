import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { CustomTextStyle, customStyles } from '../CustomStyles.native';
import Condition from '../Condition.native';
import IconButton from '../../buttons/IconButton.native';
import useGetCustomTextStyle from '../hooks/useGetCustomTextStyle.native';
import * as Size from '../../../utils/constants/sizes.native';
import * as Colors from '../../../utils/constants/colors.native';

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
  height = Size.defaultTextFieldHeight,
  multiline = false,
}: CustomTextInputProps): JSX.Element => {
  const [value, setValue] = useState('')
  const containerStyle = textStyle === CustomTextStyle.InputSingleLine 
    ? customStyles.singleLineContainer 
    : customStyles.multiLineContainer;

  return (
    <View style={containerStyle}>
      <TextInput 
        style={{ ...useGetCustomTextStyle(textStyle), height: height }}
        editable
        maxLength={maxLength}
        multiline={multiline}
        placeholder={placeholder}
        placeholderTextColor={Colors.lightGrey}
        value={value}
        onChangeText={(text): void => setValue(text)}
      />
      {/* // TODO: Animate button showing */}
      <Condition condition={value.length > 0}>
        <IconButton 
          name='close-circle-outline'
          style={customStyles.inputClearBtn} 
          onPress={(): void =>  setValue('')}
          height={25} 
        />
      </Condition>
    </View>
  );
};

export default CustomTextInput;