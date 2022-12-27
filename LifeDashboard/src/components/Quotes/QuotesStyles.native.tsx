import { StyleSheet } from 'react-native';
import * as Size from '../../utils/constants/sizes.native';
import * as Padding from '../../utils/constants/padding.native';

const quotesStyles = StyleSheet.create({
  container: {
    width: Size.WINDOW_WIDTH - (Padding.defaultPaddingLong * 2),
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: '#797171',
    opacity: 0.5
  }
});

export default quotesStyles;