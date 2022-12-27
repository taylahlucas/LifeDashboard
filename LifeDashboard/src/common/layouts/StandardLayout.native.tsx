import { SafeAreaView, View } from 'react-native';
import standardStyles from './StandardStyles.native';
import HeaderLayout from './HeaderLayout.native';
import FooterLayout from './FooterLayout.native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Condition from '../general/Condition.native';

interface StandardLayoutProps {
  children: any;
  title?: string;
  style?: object;
  headerAction?: () => void;
  footerAction?: () => void;
  isPopupVisible?: boolean;
};

const StandardLayout = ({ children, title, style, headerAction, footerAction, isPopupVisible = false }: StandardLayoutProps) => {
  return (
    <GestureHandlerRootView style={{ ...style, flex: 1 }}>
      <SafeAreaView style={standardStyles.background}>
        <View style={standardStyles.container}>
          <Condition condition={!!title}>
            <HeaderLayout
              title={title} 
              onPress={headerAction}
            />
          </Condition>
          {children}
          <Condition condition={!!footerAction}>
            <FooterLayout
              onPress={footerAction ?? ((): void => {})}
            />
          </Condition>
        </View>
        <Condition condition={isPopupVisible}>
          <View style={standardStyles.overlay} />
        </Condition>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default StandardLayout;