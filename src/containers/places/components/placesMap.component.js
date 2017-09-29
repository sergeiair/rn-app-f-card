import React, {PureComponent} from 'react';
import {
  View,
  Text,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import PropTypes from 'prop-types';

class PlacesMapComponent extends PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
	  const {initialRegion, data} = this.props;

    return (
	    <View style={styles.container}>
		    <MapView
			    style={styles.map}
			    provider={PROVIDER_GOOGLE}
			    zoomEnabled={true}
			    showsUserLocation={true}
			    showsMyLocationButton={true}
			    initialRegion={initialRegion}>
			    {
				    data.map((el, index) => (
					    <MapView.Marker
						    key={index}
						    coordinate={el.place.latLngObject}
						    title={el.place.name}
					    />
			      ))
			    }
		    </MapView>
	    </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		...StyleSheet.absoluteFillObject,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	map: {
		...StyleSheet.absoluteFillObject,
	},
});

PlacesMapComponent.PropTypes = {
	data: PropTypes.array.isRequired,
};

PlacesMapComponent.defaultProps = {
	initialRegion: {
		latitude: 52.507101,
		longitude: 19.231568,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421,
	}
};

export default PlacesMapComponent;