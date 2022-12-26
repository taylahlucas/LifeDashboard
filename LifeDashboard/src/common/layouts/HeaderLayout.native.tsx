import CloseButton from '../buttons/CloseButton.native';
import CustomText from '../general/CustomText.native';
import { CustomTextStyle } from '../general/CustomTextStyles.native';
import standardStyles from './StandardStyles.native';

interface HeaderLayoutProps {
  title?: string,
  onPress?: () => void;
}

const HeaderLayout = ({ title = '', onPress }: HeaderLayoutProps): JSX.Element => {
  return (
    <>
      {!!onPress 
      ?      
        <CloseButton 
          style={standardStyles.closeBtnContainer}
          onPress={onPress}
        /> 
      :
        <></>
    }
      <CustomText label={title} textStyle={CustomTextStyle.PageTitle} />
    </>
  );
};

export default HeaderLayout;