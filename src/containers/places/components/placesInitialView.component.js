import React, { PureComponent } from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';

import LabeledButtonCard from '../../../components.common/cards/labeledButtonCard.component';
import PlacesViewSelector from './placesViewSelector.component';

import coreStyles from '../../../core-styles/styles';


class PlacesInitialView extends PureComponent {

	constructor(props) {
		super(props);
	}

	render() {
		const {setView} = this.props;

		return (
			<View style={coreStyles.nonScrollWrap}>
				<View style={styles.card}>
					<PlacesViewSelector
						listAction={() => setView('list')}
						mapAction={() => setView('map')} />
				</View>
				<View style={styles.card}>
					<LabeledButtonCard
						textCode={'texts.places.customView'}
						buttonCode={'buttons.places.customView'}
						action={() => setView('customization')}/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	card: {
		marginBottom: 5,
	}
});

PlacesInitialView.defaultProps = {
	setView: PropTypes.func.isRequired,
};

export default PlacesInitialView;