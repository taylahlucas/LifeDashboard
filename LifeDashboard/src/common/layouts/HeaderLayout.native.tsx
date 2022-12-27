import IconButton from '../buttons/IconButton.native';
import CustomText from '../general/Text/CustomText.native';
import { CustomTextStyle } from '../general/CustomStyles.native';
import standardStyles from './StandardStyles.native';
import Condition from '../../common/general/Condition.native';

interface HeaderLayoutProps {
  title?: string,
  onPress?: () => void;
}

const HeaderLayout = ({ title = '', onPress }: HeaderLayoutProps): JSX.Element => {
  return (
    <>
      <Condition condition={!!onPress}>
        <IconButton 
            name='close-outline'
            style={standardStyles.headerBtnContainer}
            onPress={onPress ?? ((): void => {})}
          /> 
      </Condition>
      <CustomText label={title} textStyle={CustomTextStyle.PageTitle} />
    </>
  );
};

export default HeaderLayout;