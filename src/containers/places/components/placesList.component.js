import React, {PureComponent} from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';

import PlaceListItem from './placeListItem.component';


class PlacesListComponent extends PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
	  const {data, dropItem} = this.props;

	  return (
		  <FlatList
			  keyExtractor={(item, index) => item.place.id}
			  data={data}
			  renderItem={data => {
				  return <PlaceListItem
					  index={data.index}
					  data={data.item.place}
				    drop={dropItem}/>
			  }}
		  />
	  );
  }

}

PlacesListComponent.PropTypes = {
	data: PropTypes.array.isRequired,
	dropItem: PropTypes.func.isRequired,
};

export default PlacesListComponent;