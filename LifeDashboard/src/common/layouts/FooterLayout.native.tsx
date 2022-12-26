import { View } from 'react-native'; 
import AddButton from '../buttons/AddButton.native';
import standardStyles from './StandardStyles.native';

interface FooterLayoutProps {
  onPress: () => void;
}

const FooterLayout = ({ onPress }: FooterLayoutProps): JSX.Element => {
  return (
    <View style={standardStyles.footerStyle}>
      <AddButton onPress={onPress} />
    </View> 
  );
};

export default FooterLayout;