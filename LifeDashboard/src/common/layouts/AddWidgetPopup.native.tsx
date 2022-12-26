import React from 'react';
import { View, Modal } from 'react-native';
import CustomText from '../general/CustomText.native';
import { CustomTextStyle } from '../general/CustomTextStyles.native';
import standardStyles from './StandardStyles.native';

interface AddWidgetPopupProps {
  title?: string;
  children: any;
  isVisible: boolean;
};

const AddWidgetPopup = ({ title='', children, isVisible = false }: AddWidgetPopupProps): JSX.Element => {
  return (
    <View>
      <Modal
        animationType='slide'
        transparent={true}
        statusBarTranslucent={true}
        visible={isVisible}
        presentationStyle='overFullScreen'
      >
        <View style={standardStyles.addWidgetContainer}>
          <View style={standardStyles.addWidgetInnerContainer}>
            <CustomText label={title} textStyle={CustomTextStyle.PageTitle}/>
            {children}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AddWidgetPopup;