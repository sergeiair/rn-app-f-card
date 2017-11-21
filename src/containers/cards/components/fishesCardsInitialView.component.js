import React, {PureComponent} from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import coreStyles from '../../../core-styles/styles';

import LabeledButtonCard from '../../../components.common/cards/labeledButtonCard.component';


class FishesCardsInitialView extends PureComponent {
	render() {
		const {showNext} = this.props;

		return (
			<View style={coreStyles.nonScrollWrap}>
				<LabeledButtonCard
					textCode={'texts.game.initial'}
					buttonCode={'buttons.game.start'}
					action={showNext}/>
			</View>
		);
	}
}

FishesCardsInitialView.propTypes = {
	showNext: PropTypes.func.isRequired,
};

export default FishesCardsInitialView;