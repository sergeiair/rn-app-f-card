import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {
	View,
	Text,
	TouchableOpacity,
} from 'react-native';

import FishesCard from './fishesCard.component';
import FishesCardsHead from './fishesCardsHead.component';
import ProgressLine from '../../../components.common/progress-line/progressLine.component';


class FishesCardView extends PureComponent {

	componentDidMount() {
		this._animateTimer();
	}

	_animateTimer() {}

	render() {
		const {cardsStore, fishesStore, testsStore, showNext} = this.props;

		return (
			<View>
				<FishesCardsHead
					wrongAnswersNumber={testsStore.progress.wrong}
					correctAnswersNumber={testsStore.progress.correct}/>

				<ProgressLine
					duration={10000}
					animate={fn => this._animateTimer = fn}/>

				<FishesCard
					currentState={cardsStore.current}
					data={fishesStore.fishes}
					proceed={(prevCorrect) => {
						showNext(prevCorrect);
						this._animateTimer();
					}}/>

			</View>
		);
	}
}

FishesCardView.propTypes = {
	cardsStore: PropTypes.object.isRequired,
	testsStore: PropTypes.object.isRequired,
	fishesStore: PropTypes.object.isRequired,
	showNext: PropTypes.func.isRequired,
};
FishesCardView.defaultProps = {};

export default FishesCardView;