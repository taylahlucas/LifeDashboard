import IconButton from '../buttons/IconButton.native';
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
        <IconButton 
          name='close-outline'
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