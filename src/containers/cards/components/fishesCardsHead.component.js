import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image
} from 'react-native';
import PropTypes from 'prop-types';
import I18n from 'react-native-i18n';

import colors from '../../../core-styles/colors';

function FishesCardsHead(props) {
	const {wrongAnswersNumber, correctAnswersNumber} = props;

	return (
		<View style={styles.headWrap}>
			<Image style={styles.headImage}
				source={require('../../../images/banners/fisher2.png')}>
					<Text style={styles.headBiggerText}>
						# {wrongAnswersNumber + correctAnswersNumber}
					</Text>
					<View style={styles.headCorrectWrongWrap}>
						<Text style={StyleSheet.flatten([styles.headBiggerText, styles.headSmallerText])}>
							{correctAnswersNumber - wrongAnswersNumber}
						</Text>
						<Image style={styles.headIcon}
							source={require('../../../images/icons/hook.png')} />
					</View>
			</Image>
		</View>
	);
}

FishesCardsHead.propTypes = {
	wrongAnswersNumber: PropTypes.number.isRequired,
	correctAnswersNumber: PropTypes.number.isRequired,
};
FishesCardsHead.defaultProps = {};

const styles = StyleSheet.create({
	headWrap: {
		flexDirection: 'row',
		backgroundColor: colors.green2
	},
	headImage: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		resizeMode: 'center',
		height: 60,
		paddingLeft: 10,
		paddingRight: 5,
	},
	headIcon: {
		marginTop: 18,
		resizeMode: 'center',
		width: 24,
		height: 24
	},
	headBiggerText: {
		marginTop: 18,
		fontSize: 24,
		color: colors.lightTone,
		textAlign: 'center',
		fontWeight: '300'
	},
	headCorrectWrongWrap: {
		flexDirection: 'row',
		marginTop: 4
	},
	headSmallerText: {
		fontSize: 20,
		fontWeight: '100',
	},
});


export default FishesCardsHead;