import { View } from 'react-native';
import standardStyles from './StandardStyles.native';

interface StandardLayoutProps {
  children: any;
}

const StandardLayout = ({ children }: StandardLayoutProps) => {
  return (
    <View style={standardStyles.base}>
      {...children}
    </View>
  );
};

export default StandardLayout;