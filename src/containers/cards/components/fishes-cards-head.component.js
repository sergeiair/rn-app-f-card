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
				source={require('../../../images/banners/pattern.jpg')}>
					<Text style={styles.headBiggerText}>
						# {wrongAnswersNumber + correctAnswersNumber}
					</Text>
					<View style={styles.headCorrectWrongWrap}>
						<Text style={StyleSheet.flatten([styles.headBiggerText, styles.headSmallerText])}>
							{I18n.t('texts.game.points')}:  {correctAnswersNumber - wrongAnswersNumber}
						</Text>
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
		backgroundColor: colors.lightTone
	},
	headImage: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingLeft: 10,
		paddingRight: 10,
	},
	headBiggerText: {
		marginTop: 15,
		fontSize: 26,
		color: colors.lightTone,
		textAlign: 'center',
		fontWeight: '500',
	},
	headCorrectWrongWrap: {
		flexDirection: 'row',
		marginTop: 7,
	},
	headSmallerText: {
		fontSize: 16,
		fontWeight: '100',
	},
});


export default FishesCardsHead;