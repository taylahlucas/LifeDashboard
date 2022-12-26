import { StyleSheet } from 'react-native';
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../../utils/constants';

const standardStyles = StyleSheet.create({
  container: {
    width: WINDOW_WIDTH,
    minHeight: WINDOW_HEIGHT,
    backgroundColor: '#3E3C3C',
    alignItems: 'center'
  },
  headerBtnContainer: {
    width: 45,
    alignSelf: 'flex-end'
  },
  footerStyle: {
    bottom: 100
  }
});

export default standardStyles;