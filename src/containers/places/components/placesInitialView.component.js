import React, { PureComponent } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';
import { RkCard, RkButton } from 'react-native-ui-kitten';
import I18n from 'react-native-i18n';
import PropTypes from 'prop-types';


class PlacesInitialView extends PureComponent {

	constructor(props) {
		super(props);
	}

	_getCard(textCode, buttonCode, targetView) {
		const {setView} = this.props;

		return (
			<RkCard rkType='shadowed'>
				<View rkCardHeader>
					<Text>
						{I18n.t(textCode)}
					</Text>
				</View>
				<View rkCardContent>
					<RkButton onPress={() => setView(targetView)}
						rkType='rounded'>
							{I18n.t(buttonCode)}
					</RkButton>
				</View>
			</RkCard>
		);
	}

	render() {

		return (
			<View>
				{this._getCard('texts.places.listView', 'buttons.places.listView', 'list')}
				{this._getCard('texts.places.mapView', 'buttons.places.mapView', 'map')}
			</View>
		);
	}
}

const styles = StyleSheet.create({

});

PlacesInitialView.defaultProps = {
	setView: PropTypes.func.isRequired,
};

export default PlacesInitialView;