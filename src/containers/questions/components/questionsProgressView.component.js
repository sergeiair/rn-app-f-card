import React, {PureComponent} from 'react';
import {
	View,
	Text,
} from 'react-native';
import PropTypes from 'prop-types';

import coreStyles from '../../../core-styles/styles';

import Question from './questionItem.component';
import TestsProgressControls from '../../../components.common/controls/testsProgressControls.component';


class QuestionsProgressView extends PureComponent {
	render() {
		const {toggleSelection, isSelected, isChecked, currentQuestion, check, switchNext} = this.props;

		return (
			<View style={coreStyles.nonScrollWrap}>
				<Question
					data={currentQuestion}
					toggleSelection={toggleSelection}
				  isSelected={isSelected}
					isChecked={isChecked}/>

				<TestsProgressControls
					switchNext={switchNext}
					check={check}
					currentChecked={isChecked}/>
			</View>
		);
	}
}

QuestionsProgressView.propTypes = {
	currentQuestion: PropTypes.object.isRequired,
	toggleSelection: PropTypes.func.isRequired,
	check: PropTypes.func.isRequired,
	switchNext: PropTypes.func.isRequired,
	isSelected: PropTypes.func.isRequired,
	isChecked: PropTypes.bool.isRequired,
};
QuestionsProgressView.defaultProps = {};

export default QuestionsProgressView;