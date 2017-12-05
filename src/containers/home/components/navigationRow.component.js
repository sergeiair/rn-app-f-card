import React from 'react';
import {Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import I18n from 'react-native-i18n';

import colors from '../../../core-styles/colors';

import icons from '../../../images/icons';


function NavigationRow(props) {
	const {action, textCode, iconCode, position} = props;

	return (
		<TouchableOpacity
			style={styles.cardWrap}
			onPress={action}>
				<Image style={styles.icon}
					resizeMode="center"
				  source={icons[iconCode]}/>
				<Text style={styles.text}>
					{I18n.t(textCode)}
				</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	cardWrap: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: 140,
		marginTop: 40,
		paddingBottom: 15,
		borderBottomWidth: 1,
		borderBottomColor: colors.yellowTone,
	},
	icon: {
		width: 32,
		height: 32,
		marginRight: 5,
	},
	text: {
		marginLeft: 5,
		fontSize: 13,
		color: colors.lightTone
	}
});


NavigationRow.propTypes = {
	action: PropTypes.func.isRequired,
	iconCode: PropTypes.string.isRequired,
	textCode: PropTypes.string.isRequired
};
NavigationRow.defaultProps = {};

export default NavigationRow;