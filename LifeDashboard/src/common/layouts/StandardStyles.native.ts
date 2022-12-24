import { StyleSheet } from 'react-native';
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../../utils/constants';

const standardStyles = StyleSheet.create({
  base: {
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
    backgroundColor: '#3E3C3C'
  },
  closeBtnContainer: {
    top: 60, 
    width: 45,
    alignSelf: 'flex-end'
  }
});

export default standardStyles;