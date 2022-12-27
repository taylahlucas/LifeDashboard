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
  overlay: {
    position: 'absolute',
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
    backgroundColor: 'black',
    opacity: 0.5
  },
  addWidgetContainer: {
    width: WINDOW_WIDTH - (defaultSidePaddingLong * 2),
    backgroundColor: '#4F4C4C',
    alignSelf: 'center',
    top: 80,
    borderRadius: 5,
    shadowRadius: 5,
    zIndex: 10
  },
  addWidgetInnerContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20
  },
  addWidgetButton: {
    alignSelf: 'center',
    padding: 20,
    zIndex: -1
  }
});

export default standardStyles;