import React, {PureComponent} from 'react';
import {
  Text,
  TouchableHighlight,
	StyleSheet,
  View,
	Alert,
} from 'react-native';
import PropTypes from 'prop-types';

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
		    <Text>{data.name}</Text>
		    <TouchableHighlight
			    onPress={this._confirm.bind(this, data.id, index)}>
			    <Text style={styles.dropBtn}>
				    X
			    </Text>
		    </TouchableHighlight>
	    </View>
    )
	}
}

const styles = StyleSheet.create({
	itemWrap: {
	  flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
		padding: 10,
	},
	dropBtn: {
	  fontSize: 18,
		padding: 3,
  },
});

PlaceListItem.PropTypes = {
  data: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired,
	drop: PropTypes.func.isRequired,
};

export default PlaceListItem;