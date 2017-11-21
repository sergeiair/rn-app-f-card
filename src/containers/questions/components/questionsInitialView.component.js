import React, {PureComponent} from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import LabeledButtonCard from '../../../components.common/cards/labeledButtonCard.component';

import coreStyles from '../../../core-styles/styles';


class QuestionsInitialView extends PureComponent {
	render() {
		const {start} = this.props;

		return (
			<View style={coreStyles.nonScrollWrap}>
				<LabeledButtonCard
					textCode={'texts.questions.initial'}
					buttonCode={'buttons.questions.start'}
					action={start}/>
			</View>
		);
	}
}

QuestionsInitialView.propTypes = {
	start: PropTypes.func.isRequired,
};
QuestionsInitialView.defaultProps = {};

export default QuestionsInitialView;