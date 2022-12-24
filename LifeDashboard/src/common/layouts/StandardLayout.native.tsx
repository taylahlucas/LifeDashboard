import { SafeAreaView, View } from 'react-native';
import standardStyles from './StandardStyles.native';
import HeaderLayout from './HeaderLayout.native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

interface StandardLayoutProps {
  children: any;
  title?: string;
  headerAction?: () => void;
};

const StandardLayout = ({ children, title, headerAction }: StandardLayoutProps) => {
  const backgroundStyle = {
    flex: 1,
    backgroundColor: '#3E3C3C',
    // backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={backgroundStyle}>
        <View style={standardStyles.container}>
          <HeaderLayout
            title={title} 
            onPress={headerAction} 
          />
          {children}
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default StandardLayout;