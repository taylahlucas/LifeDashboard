import { StyleSheet } from 'react-native';
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../../utils/constants/sizes.native';
import * as Padding from '../../utils/constants/padding.native';
import * as Colors from '../../utils/constants/colors.native';

const standardStyles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.darkGrey
  },
  container: {
    width: WINDOW_WIDTH,
    minHeight: WINDOW_HEIGHT,
    backgroundColor: Colors.darkGrey,
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
    width: WINDOW_WIDTH - (Padding.defaultPaddingLong * 2),
    backgroundColor: Colors.medGrey,
    alignSelf: 'center',
    top: 80,
    borderRadius: Padding.defaultBorderRadius,
    shadowRadius: 5,
    zIndex: 10
  },
  addWidgetInnerContainer: {
    paddingLeft: Padding.defaultPaddingLong,
    paddingRight: Padding.defaultPaddingLong,
    paddingBottom: Padding.defaultPaddingLong
  },
  addWidgetButton: {
    alignSelf: 'center',
    padding: Padding.defaultPaddingLong,
    zIndex: -1
  }
});

export default standardStyles;