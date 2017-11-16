import { RkTheme } from 'react-native-ui-kitten';

import colors from './colors';

RkTheme.setType('RkButton', 'rounded', {
	flex: 1,
	alignSelf: 'stretch',
	justifySelf: 'center',
	backgroundColor: colors.pastelGreen,
	borderRadius: 5,
});

RkTheme.setType('RkButton', 'rounded-blue', {
	flex: 1,
	alignSelf: 'stretch',
	justifySelf: 'center',
	backgroundColor: colors.blue,
	borderRadius: 5,
});

RkTheme.setType('RkCard', 'shadowed', {
	img: {
		alignSelf: 'center'
	},
	header: {
		alignSelf: 'center'
	},
	content:{
		alignSelf:'center'
	}
});

