import { StyleSheet } from 'react-native';
import { WINDOW_WIDTH, defaultSidePaddingLong } from '../../utils/constants.native';

const quotesStyles = StyleSheet.create({
  container: {
    width: WINDOW_WIDTH - (defaultSidePaddingLong * 2),
    // maxHeight: 100,
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: '#797171',
    opacity: 0.5
  }
});

export default quotesStyles;