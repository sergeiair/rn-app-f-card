import React from 'react';
import { StyleSheet } from 'react-native';
import { RkButton, RkCard } from 'react-native-ui-kitten';
import PropTypes from 'prop-types';

import colors from "../../core-styles/colors";


function TestsProgressControls(props) {
	const {switchNext, check, currentChecked} = props;

	return (
		<RkCard
			rkType='shadowed'
			style={styles.card}>
			{
				currentChecked
					? (
						<RkButton
							style={styles.button}
							onPress={switchNext}>
								Next
						</RkButton>
					) : (
						<RkButton
							style={styles.button}
							onPress={check}>
								Check answer
						</RkButton>
					)
			}
		</RkCard>
	)
}

TestsProgressControls.propTypes = {
	switchNext: PropTypes.func.isRequired,
	check: PropTypes.func.isRequired,
	currentChecked: PropTypes.bool.isRequired
};

const styles = StyleSheet.create({
	card: {
		flexDirection: 'row',
		alignItems: 'stretch',
		marginTop: 5,
		padding: 10,
	},
	button: {
		flex: 1,
		backgroundColor: colors.green
	}
});

export default TestsProgressControls;