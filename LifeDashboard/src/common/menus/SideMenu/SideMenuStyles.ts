import { StyleSheet } from 'react-native';

const sideMenuStyles = StyleSheet.create({
  base: {
    position: 'absolute',
    left: 0,
    top: 35,
    zIndex: 3
  },
  container: {
    position: 'absolute',
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 390,
    width: 70,
    opacity: 0.6,
    borderRadius: 5,
    boxShadow: 20,
    shadowColor: '#000',
    shadowRadius: 10,
    shadowOpacity: 1,
  },
  row: {
    marginTop: 55
  },
  box: {
    width: 50,
    height: 50,
    left: 10,
    marginTop: 15,
    borderRadius: 5,
    alignItems: 'center'
  },
  icon: {
    marginTop: 3
  }
});

export default sideMenuStyles;