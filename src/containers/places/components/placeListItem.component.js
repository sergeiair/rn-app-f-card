import React, {PureComponent} from 'react';
import {
  Text,
  TouchableOpacity,
	StyleSheet,
  View,
	Alert,
	Image
} from 'react-native';
import PropTypes from 'prop-types';
import I18n from 'react-native-i18n';

import colors from '../../../core-styles/colors';


class PlaceListItem extends PureComponent {

	constructor(props) {
		super(props);
	}

	_confirm(id, index) {
		Alert.alert(
			``,
			I18n.t('texts.places.wantDelete'),
			[
				{
					text: I18n.t('buttons.cancel'),
					onPress: () => {},
					style: 'cancel',
				},
				{
					text: I18n.t('buttons.ok'),
					onPress: () => {
						this.props.drop(id, index);
					},
				},
			],
			{ cancelable: false }
		)
	}

	render () {
		const {data, index} = this.props;

    return (
	    <View style={styles.itemWrap}>
		    <View>
			    <Text>{data.name}</Text>
			    <Text style={styles.latLng}>
				    {data.latLng}
				    </Text>
		    </View>
		    <TouchableOpacity
			    onPress={this._confirm.bind(this, data.id, index)}>
				    <Image style={styles.dropBtn}
				      resizeMode="center"
					    source={require('../../../images/icons/cross.png')} />
		    </TouchableOpacity>
	    </View>
    )
	}
}

const styles = StyleSheet.create({
	itemWrap: {
	  flex: 1,
    flexDirection: 'row',
		alignItems: 'center',
    justifyContent: 'space-between',
		padding: 15,
		marginBottom: 1,
		backgroundColor: colors.lightTone
	},
	latLng: {
		color: colors.blue
	},
	dropBtn: {
	  width: 24,
		height: 24,
  },
});

PlaceListItem.PropTypes = {
  data: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired,
	drop: PropTypes.func.isRequired,
};

export default PlaceListItem;