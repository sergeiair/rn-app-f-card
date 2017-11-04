import React from 'react';
import { RkButton } from 'react-native-ui-kitten';
import PropTypes from 'prop-types';


function TestsProgressControls(props) {
	const {switchNext, check, currentChecked} = props;

	return currentChecked
		? (
			<RkButton onPress={switchNext}
				kType='rounded-blue'>
					Next
			</RkButton>
		) : (
			<RkButton onPress={check}
				kType='rounded-blue'>
					Check answer
			</RkButton>
		);
}

TestsProgressControls.propTypes = {
	switchNext: PropTypes.func.isRequired,
	check: PropTypes.func.isRequired,
	currentChecked: PropTypes.bool.isRequired
};
TestsProgressControls.defaultProps = {};

export default TestsProgressControls;