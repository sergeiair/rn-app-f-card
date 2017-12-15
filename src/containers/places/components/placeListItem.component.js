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

import colors from '../../../core-styles/colors';


class PlaceListItem extends PureComponent {

	constructor(props) {
		super(props);
	}

	_confirm(id, index) {
		Alert.alert(
			`Attention`,
			`Want to delete this place?`,
			[
				{
					text: 'Oh no', onPress: () => {},
					style: 'cancel',
				},
				{
					text: 'Yes', onPress: () => {
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
		color: colors.green2
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