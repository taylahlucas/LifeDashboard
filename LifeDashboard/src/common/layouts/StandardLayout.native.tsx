import { SafeAreaView, View } from 'react-native';
import standardStyles from './StandardStyles.native';
import HeaderLayout from './HeaderLayout.native';
import FooterLayout from './FooterLayout.native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

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
          {!!title
            ?
            <HeaderLayout
              title={title} 
              onPress={headerAction}
            />
            : null
          }
          {children}
          {!!footerAction 
            ?
            <FooterLayout
              onPress={footerAction}
            />
            : null
          }
        </View>
        {isPopupVisible
        ?
          <View style={standardStyles.overlay} />
          :
          null
        }
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default StandardLayout;