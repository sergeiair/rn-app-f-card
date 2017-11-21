import { StyleSheet } from 'react-native';

import colors from './colors';

const coreStyles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: 50,
	  backgroundColor: colors.grey,
  },
  nonScrollWrap: {
	  paddingTop: 10,
	  paddingLeft: 5,
	  paddingRight: 5,
  },
	scrollableWrap: {
		paddingTop: 5,
		paddingLeft: 5,
		paddingRight: 5,
	},
	rowAround: {
  	flexDirection: 'row',
		justifyContent: 'space-around'
	}
});

export * from './colors';
export default coreStyles;

