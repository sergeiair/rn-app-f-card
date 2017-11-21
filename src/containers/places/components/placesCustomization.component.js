import React, {PureComponent} from 'react';
import {
  View,
  Text,
	TextInput,
	StyleSheet,
	TouchableOpacity,
	Image,
	Dimensions
} from 'react-native';
import { RkCard } from 'react-native-ui-kitten';
import PropTypes from 'prop-types';
import I18n from 'react-native-i18n';

import LocationService from '../../../services/location.service';

import coreStyles from '../../../core-styles/styles';
import colors from '../../../core-styles/colors';


class PlacesCustomizationComponent extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
    	locData: null,
	    name: null,
	    message: 'Locating...',
    }
  }

  componentDidMount() {
  	this._locate();
  }

	_locate() {
		LocationService.ensureLocationEnabled();

		LocationService.resolveLocation().then(data => {
			this.setState({
				locData: data,
				message: null,
			});
		}).catch((error) => {
			this.setState({
				locData: null,
				message: error.message || 'unknown error',
			});
		});
	}

	_savePlace() {
		const {addNew} = this.props;
		const {name, locData} = this.state;

		addNew({
			name,
			type: 'own',
			latLng: `${locData.latitude}, ${locData.longitude}`
		});

		this.setState({
			name: null
		});
	}

	get saveDisabled() {
		const {locData, name} = this.state;

		return !name || !locData;
	}


	get locationStatus() {
		const {locData, message} = this.state;

		if (!locData && !message) {
			return 'Not located';
		}

		return locData && !message
			? `${locData.latitude}, ${locData.longitude}` : message;
	}

  render() {
	  const {name, locData} = this.state;

    return (
	    <View style={coreStyles.nonScrollWrap}>
		    <RkCard rkType='shadowed'>
			    <View rkCardContent>
				    <Text style={styles.label}>
					    Provide a place name and locate yourself
				    </Text>
				    <TextInput style={styles.input}
				      defaultValue={name}
				      onChangeText={text => this.setState({name: text})}/>
				    <View style={styles.location}>
					    <Text style={styles.locationState}>
						    {this.locationStatus}
					    </Text>
					    <TouchableOpacity onPress={this._locate.bind(this)}>
						    <Image
							    style={styles.locationIcon}
							    resizeMode="center"
							    source={require('../../../images/icons/tracker.png')} />
					    </TouchableOpacity>
				    </View>
			    </View>
			    <View>
				    <TouchableOpacity style={this.saveDisabled ? styles.saveBtnDisabled : styles.saveBtn}
				      disabled={this.saveDisabled}
					    onPress={this._savePlace.bind(this)}>
						    <Text style={styles.saveBtnText}>
							    Save
						    </Text>
				    </TouchableOpacity>
			    </View>
		    </RkCard>
	    </View>
    );
  }
}

const styles = StyleSheet.create({
	label: {
		marginBottom: 5,
		padding: 10,
		fontSize: 14,
		textAlign: 'center',
	},
	input: {
		width: Dimensions.get('window').width - 30,
	},
	saveBtn: {
		padding: 13,
		margin: 10,
		borderRadius: 3,
		backgroundColor: colors.blue
	},
	saveBtnDisabled: {
		padding: 13,
		margin: 10,
		borderRadius: 3,
		backgroundColor: colors.grey
	},
	saveBtnText: {
		textAlign: 'center',
		color: colors.lightTone
	},
	location: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginTop: 10,
		marginBottom: 10
	},
	locationIcon: {
		width: 32,
		height: 32
	},
	locationState: {
		paddingLeft: 5,
	}
});

PlacesCustomizationComponent.propTypes = {
	addNew: PropTypes.func.isRequired,
};

export default PlacesCustomizationComponent;