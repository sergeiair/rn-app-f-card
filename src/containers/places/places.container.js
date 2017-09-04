import React, {PureComponent} from 'react';
import { observer } from 'mobx-react/native';
import {
  View,
  Text,
} from 'react-native';
import MapView from 'react-native-maps';

import coreStyles from '../../core-styles/styles';

@observer
class PlacesContainer extends PureComponent {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  render() {
	  const {rulesStore} = this.props;

    return (
      <View>
	      <MapView
		      initialRegion={{
			      latitude: 37.78825,
			      longitude: -122.4324,
			      latitudeDelta: 0.0922,
			      longitudeDelta: 0.0421,
		      }}
	      />
      </View>
    );
  }
}

export default PlacesContainer;