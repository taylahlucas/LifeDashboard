import { View, Text } from 'react-native';
import CloseButton from '../buttons/CloseButton.native';
import standardStyles from './StandardStyles.native';
import { useReactNavigation } from '../../navigation/hooks/useReactNavigation.native';
import CustomText from '../general/CustomText.native';
import { CustomTextStyle } from '../general/CustomTextStyles.native';

interface WidgetPageLayoutProps {
  title: string;
};

const WidgetPageLayout = () => {
  const navigation = useReactNavigation();

  return (
    <>
      <View style={standardStyles.base}>
        <CustomText label={'Page Title'} textStyle={CustomTextStyle.PageTitle} />
        <CloseButton 
          style={standardStyles.closeBtnContainer}
          onPress={(): void => navigation.goBack()}
        />
      </View>
    </>
  );
};

export default WidgetPageLayout;