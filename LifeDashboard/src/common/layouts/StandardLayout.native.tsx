import { View, Text } from 'react-native';
import CloseButton from '../buttons/CloseButton.native';
import standardStyles from './StandardStyles.native';
import { useReactNavigation } from '../../navigation/hooks/useReactNavigation.native';
import CustomText from '../general/CustomText.native';
import { CustomTextStyle } from '../general/CustomTextStyles.native';
import Spacer from '../general/Spacer.native';

interface WidgetPageLayoutProps {
  title: string;
};

const WidgetPageLayout = () => {
  const navigation = useReactNavigation();

  return (
    <>
      <View style={standardStyles.container}>
        <Spacer height={40} />
        <CloseButton 
          style={standardStyles.closeBtnContainer}
          onPress={(): void => navigation.goBack()}
        />
        <CustomText label={'Page Title'} textStyle={CustomTextStyle.PageTitle} />
      </View>
    </>
  );
};

export default WidgetPageLayout;