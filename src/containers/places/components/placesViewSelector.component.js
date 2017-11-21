import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { RkCard } from 'react-native-ui-kitten';
import PropTypes from 'prop-types';

import coreStyles from '../../../core-styles/styles';


function PlacesViewSelector(props) {
		const {mapAction, listAction} = props;

		return (
			<RkCard rkType='shadowed'>
				<View style={coreStyles.rowAround}>
					<TouchableOpacity onPress={mapAction}>
						<Image
							resizeMode="center"
						  source={require('../../../images/icons/google-maps.png')} />
					</TouchableOpacity>
					<TouchableOpacity onPress={listAction}>
						<Image
							resizeMode="center"
						  source={require('../../../images/icons/list.png')} />
					</TouchableOpacity>
				</View>
			</RkCard>
		);
}


PlacesViewSelector.propTypes = {
	mapAction: PropTypes.func.isRequired,
	listAction: PropTypes.func.isRequired
};
PlacesViewSelector.defaultProps = {};

export default PlacesViewSelector;