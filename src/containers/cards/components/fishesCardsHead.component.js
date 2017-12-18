import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image
} from 'react-native';
import PropTypes from 'prop-types';

import colors from '../../../core-styles/colors';


function FishesCardsHead(props) {
	const {wrongAnswersNumber, correctAnswersNumber} = props;

	return (
		<View style={styles.headWrap}>
			<View style={styles.head}>
				<View style={styles.headItem}>
					<Image style={styles.headIcon}
						source={require('../../../images/icons/hook.png')} />
					<Text style={styles.headBiggerText}>
						{correctAnswersNumber + wrongAnswersNumber}
					</Text>
				</View>
				<View style={styles.headItem}>
					<Text style={styles.headBiggerText}>
						{correctAnswersNumber}
					</Text>
						<Image style={styles.headIcon}
							source={require('../../../images/icons/fisher2.png')} />
				</View>
			</View>
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
	head: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		height: 60,
		paddingLeft: 2,
		paddingRight: 7,
	},
	headIcon: {
		marginTop: 18,
		resizeMode: 'center',
		width: 24,
		height: 24
	},
	headBiggerText: {
		marginTop: 19,
		marginRight: 5,
		fontSize: 18,
		fontWeight: '100',
		color: colors.darkGreen,
		textAlign: 'center',
	},
	headItem: {
		flexDirection: 'row',
		marginTop: 4
	},
});


export default FishesCardsHead;