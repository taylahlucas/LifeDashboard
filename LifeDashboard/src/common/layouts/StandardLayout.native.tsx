import { View } from 'react-native';
import standardStyles from './StandardStyles.native';

interface StandardLayoutProps {
  children: any;
}
// { children }: StandardLayoutProps
const StandardLayout = () => {
  return (
    <View style={standardStyles.base}>
      {/* {...children} */}
    </View>
  );
};

export default StandardLayout;