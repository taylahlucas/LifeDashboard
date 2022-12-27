import { View } from 'react-native'; 
import IconButton from '../buttons/IconButton.native';
import standardStyles from './StandardStyles.native';

interface FooterLayoutProps {
  onPress: () => void;
}

const FooterLayout = ({ onPress }: FooterLayoutProps): JSX.Element => {
  return (
    <View style={standardStyles.footerStyle}>
      <IconButton name='add-outline' onPress={onPress} />
    </View> 
  );
};

export default FooterLayout;