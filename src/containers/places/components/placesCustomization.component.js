import React, {PureComponent} from 'react';
import {
  View,
  Text,
	TextInput,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

import LocationService from '../../../services/location.service';

import coreStyles from '../../../core-styles/styles';

class PlacesCustomizationComponent extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
    	locData: null,
	    name: null,
	    message: 'in progress...',
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

  	if (locData) {
		  addNew({
			  name,
			  type: 'own',
			  latLng: `${locData.latitude}, ${locData.longitude}`
		  });
	  }
	}

	get locationStatus() {
		const {locData, message} = this.state;

		if (!locData && !message) {
			return 'not located';
		}

		return locData && !message
			? `Latitude: ${locData.latitude}, Longitude: ${locData.longitude}` : message;
	}

  render() {
	  const {name, locData} = this.state;

    return (
	    <View style={coreStyles.main}>
				<View>
					<TextInput style={coreStyles.defaultInput}
						onChangeText={(text) => this.setState({name: text})}/>
				</View>
		    <View>
			    <TextInput style={coreStyles.defaultInput}
			      value={this.locationStatus}
			      editable={false} />
		    </View>
		    <View>
			    <TouchableOpacity style={coreStyles.defaultBtnBlue}
			      onPress={this._savePlace.bind(this)}
			      disabled={!name || !locData}>
					    <Text style={coreStyles.whiteText}>
						    Save
					    </Text>
			    </TouchableOpacity>
		    </View>
	    </View>
    );
  }
}

const styles = StyleSheet.create({

});

PlacesCustomizationComponent.propTypes = {
	addNew: PropTypes.func.isRequired,
};

export default PlacesCustomizationComponent;