import React, {PureComponent} from 'react';
import {
  View,
  Text,
	StyleSheet,
	ListView,
} from 'react-native';
import PropTypes from 'prop-types';

import PlaceListItem from './placeListItem.component';

class PlacesListComponent extends PureComponent {

  constructor(props) {
    super(props);
  }

	componentWillReceiveProps(nextProps) {
		const {data} = nextProps;
		const {oldData} = this.props;

	}

  render() {
	  const {data, ds, dropItem} = this.props;

	  return (
		  <ListView
			  style={styles.list}
			  initialListSize={20}
			  enableEmptySections={true}
			  dataSource={ds.cloneWithRows(
				  (data || []).filter(item => item)
			  )}
			  renderRow={(rowData, secId, rowId) => {
				  return <PlaceListItem
					  index={parseInt(rowId, 10)}
					  data={rowData.place}
				    drop={dropItem}/>
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
	dropItem: PropTypes.func.isRequired,
};

export default PlacesListComponent;