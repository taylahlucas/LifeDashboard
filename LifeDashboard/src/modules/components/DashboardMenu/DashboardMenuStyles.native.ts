import { StyleSheet } from 'react-native';

const dashboardMenuStyles = StyleSheet.create({
  base: {
    position: 'absolute',
    top: 10,
    left: 0,
    zIndex: 3
  },
  container: {
    position: 'absolute',
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 330,
    width: 95,
    backgroundColor: '#00000050',
    borderRadius: 5
  },
  row: {
    marginTop: 50
  },
  box: {
    width: 50,
    height: 50,
    left: 30,
    marginTop: 15,
    borderRadius: 5,
    alignItems: 'center'
  },
  icon: {
    marginTop: 3
  }
});

export default dashboardMenuStyles;