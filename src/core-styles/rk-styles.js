import {Dimensions} from "react-native";
import { RkTheme } from 'react-native-ui-kitten';

import colors from './colors';


RkTheme.setType('RkCard', 'shadowed', {
	img: {
		alignSelf: 'center'
	},
	header: {
		alignSelf: 'center'
	},
	content:{
		marginTop: 5,
		paddingTop: 5,
		paddingBottom: 15,
		alignSelf:'center'
	}
});

RkTheme.setType('RkButton', 'rounded', {
	flex: 1,
	alignSelf: 'stretch',
	justifySelf: 'center',
	color: colors.lightTone,
	backgroundColor: colors.green,
	borderRadius: 5,
});

