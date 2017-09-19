import React, {PureComponent} from 'react';
import {
  View,
  Text,
	TextInput,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';

import LocationService from '../../../services/location.service';

import coreStyles from '../../../core-styles/styles';

class PlacesCustomizationComponent extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
    	res: null,
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
				res: data,
				message: null,
			});
		}).catch((error) => {
			this.setState({
				res: null,
				message: error.message || 'unknown error',
			});
		});
	}

	get locationStatus() {
		const {res, message} = this.state;

		if (!res && !message) {
			return 'not located';
		}

		return res && !message
			? `latitude: ${res.latitude}, longitude: ${res.longitude}` : message;
	}

  render() {
    return (
	    <View style={coreStyles.main}>
				<View>
					<TextInput style={coreStyles.defaultInput}/>
				</View>
		    <View>
			    <TextInput style={coreStyles.defaultInput}
			      value={this.locationStatus}
			      editable={false} />
		    </View>
		    <View>
			    <TouchableOpacity style={coreStyles.defaultBtnBlue}
			      onPress={}>
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

PlacesCustomizationComponent.defaultProps = {

};

export default PlacesCustomizationComponent;