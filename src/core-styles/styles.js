import { StyleSheet, Dimensions } from 'react-native';

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
	rowStart: {
		flexDirection: 'row',
		justifyContent: 'flex-start'
	},
	rowEnd: {
		flexDirection: 'row',
		justifyContent: 'flex-end'
	},
	rowAround: {
  	flexDirection: 'row',
		justifyContent: 'space-around'
	},
	rowBetween: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	imageBg: {
		flexDirection: 'column',
		resizeMode: 'cover',
		width: null,
		height: Dimensions.get('window').height
	},
	imageBgContent: {
  	paddingTop: 10,
		paddingBottom: 20,
		borderBottomWidth: 5,
		borderBottomColor: colors.darkGreen,
  	backgroundColor: colors.darkGreen,
		opacity: .8,
		elevation: 20
	}
});

export * from './colors';
export default coreStyles;

