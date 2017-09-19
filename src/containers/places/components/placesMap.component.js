import React, {PureComponent} from 'react';
import {
  View,
  Text,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

class PlacesMapComponent extends PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
	  const {initialRegion} = this.props;

    return (
	    <View style={styles.container}>
		    <MapView
			    style={styles.map}
			    provider={PROVIDER_GOOGLE}
			    zoomEnabled={true}
			    showsUserLocation={true}
			    showsMyLocationButton={true}
			    initialRegion={initialRegion}>
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

PlacesMapComponent.defaultProps = {
	initialRegion: {
		latitude: 52.507101,
		longitude: 19.231568,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421,
	}
};

export default PlacesMapComponent;