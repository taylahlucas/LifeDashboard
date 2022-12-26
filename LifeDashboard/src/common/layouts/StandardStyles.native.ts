import { StyleSheet } from 'react-native';
import { WINDOW_HEIGHT, WINDOW_WIDTH, defaultSidePaddingLong} from '../../utils/constants';

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
  },
  addWidgetContainer: {
    width: WINDOW_WIDTH - (defaultSidePaddingLong * 2),
    height: 400,
    backgroundColor: '#4F4C4C',
    alignSelf: 'center',
    top: 80,
  },
  addWidgetInnerContainer: {
    padding: 20
  }
});

export default standardStyles;