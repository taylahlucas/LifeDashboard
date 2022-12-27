import CloseButton from '../buttons/CloseButton.native';
import CustomText from '../general/Text/CustomText.native';
import { CustomTextStyle } from '../general/CustomStyles.native';
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
          style={standardStyles.headerBtnContainer}
          onPress={onPress}
        /> 
      :
        null
    }
      <CustomText label={title} textStyle={CustomTextStyle.PageTitle} />
    </>
  );
};

export default HeaderLayout;