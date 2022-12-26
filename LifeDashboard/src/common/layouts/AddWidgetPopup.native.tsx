import React, { useEffect, useState } from 'react';
import { View, Modal, TouchableWithoutFeedback } from 'react-native';
import CustomText from '../general/CustomText.native';
import { CustomTextStyle } from '../general/CustomTextStyles.native';
import HeaderLayout from './HeaderLayout.native';
import standardStyles from './StandardStyles.native';

interface AddWidgetPopupProps {
  title?: string;
  children: any;
  isVisible: boolean;
  onClose: (isPopupVisible: boolean) => void;
};

const AddWidgetPopup = ({ title='', children, isVisible, onClose }: AddWidgetPopupProps): JSX.Element => {
  const [visible, setIsVisible] = useState(isVisible);

  useEffect(() => {
    setIsVisible(isVisible)
  }, [isVisible])

  return (
    <View>
      <Modal
        animationType='slide'
        transparent={true}
        statusBarTranslucent={true}
        visible={visible}
        presentationStyle='overFullScreen'
      >
        <View style={standardStyles.addWidgetContainer}>
        <HeaderLayout onPress={(): void => {
          setIsVisible(visible)
          onClose(!visible)
        }} />
          <View style={standardStyles.addWidgetInnerContainer}>
            <CustomText 
              label={title} 
              textStyle={CustomTextStyle.PageTitle}
              style={{ marginTop: -10 }}
            />
            {children}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AddWidgetPopup;