import React from 'react';
import PropTypes from 'prop-types';
import {
	View,
	Text,
	TouchableOpacity,
} from 'react-native';

function FishesCardsHead(props) {
	const {testsStore} = props;

	return (
		<View>
			<View>
				<View>
					<Text>{testsStore.progress.correct}/{testsStore.progress.wrong}</Text>
				</View>
			</View>
		</View>
	);
}

FishesCardsHead.propTypes = {
	testsStore: PropTypes.object.isRequired,
};
FishesCardsHead.defaultProps = {};

export default FishesCardsHead;