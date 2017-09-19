import React, {PureComponent} from 'react';
import {
  View,
  Text,
	StyleSheet,
	TouchableOpacity,
	ListView,
} from 'react-native';
import PropTypes from 'prop-types';

class PlacesListComponent extends PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
	  const {data, ds} = this.props;

	  return (
		  <ListView
			  style={styles.list}
			  initialListSize={data.length}
			  enableEmptySections={true}
			  dataSource={ds.cloneWithRows(
				  (data || []).filter(item => item)
			  )}
			  renderRow={(rowData) => {
				  return <Text>{rowData.place.name}</Text>
			  }}
		  />
	  );
  }
}

const styles = StyleSheet.create({
});

PlacesListComponent.defaultProps = {
	ds: new ListView.DataSource({
		rowHasChanged: (r1, r2) => r1.id !== r2.id,
	}),
};

PlacesListComponent.PropTypes = {
	data: PropTypes.array.isRequired,
};

export default PlacesListComponent;