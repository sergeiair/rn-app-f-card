import React, {PureComponent} from 'react';
import { observer } from 'mobx-react/native';
import {
  View,
  Text,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';

import PlacesMapComponent from './components/placesMap.component';
import PlacesListComponent from './components/placesList.component';
import PlacesCustomizationComponent from './components/placesCustomization.component';

import PlacesStore from './../../stores/places.store';

import coreStyles from '../../core-styles/styles';

@observer
class PlacesContainer extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
    	view: null,
    }
  }

	componentWillMount() {
		const {placesStore} = this.props;

		placesStore.fetch();
	}

  _setView(view) {
  	this.setState({view})
  }

  _getView(type) {
	  const {placesStore} = this.props;

  	switch (type) {
		  case 'map':
		  	return <PlacesMapComponent/>;
		  case 'list':
			  return <PlacesListComponent data={placesStore.places}/>;
		  case 'customization':
			  return <PlacesCustomizationComponent/>;
	  }
  }

  get controls() {
  	return (
  		<View>
			  <TouchableOpacity style={coreStyles.defaultBtnGreen}
				  onPress={this._setView.bind(this, 'list')}>
				    <Text style={coreStyles.whiteText}>Places list view</Text>
			  </TouchableOpacity>
			  <TouchableOpacity style={coreStyles.defaultBtnGreen}
				  onPress={this._setView.bind(this, 'map')}>
				    <Text style={coreStyles.whiteText}>Places map view</Text>
			  </TouchableOpacity>
			  <TouchableOpacity style={coreStyles.defaultBtnGreen}
				  onPress={this._setView.bind(this, 'customization')}>
				    <Text style={coreStyles.whiteText}>Add own place</Text>
			  </TouchableOpacity>
	    </View>
	  );
  }

  render() {
  	const {view} = this.state;

    return (
	    <View style={coreStyles.main}>
		    {
		    	!view ? this.controls : this._getView(view)
		    }
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

PlacesContainer.defaultProps = {
	placesStore: new PlacesStore(),
};

export default PlacesContainer;