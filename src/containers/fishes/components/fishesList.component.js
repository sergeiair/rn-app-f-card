import React, {PureComponent} from 'react';
import { ListView } from 'react-native';
import PropTypes from 'prop-types';

import FishesListItem from './fishesListItem.component';

import coreStyles from '../../../core-styles/styles';

class FishesList extends PureComponent {

	constructor() {
		super();
	}

	render() {
		const {data, ds} = this.props;

		return (
      <ListView
	      style={coreStyles.scrollableWrap}
        initialListSize={5}
        enableEmptySections={true}
        dataSource={ds.cloneWithRows(
          (data || []).filter(item => item)
        )}
        renderRow={(rowData) => {
          return <FishesListItem data={rowData}/>
        }}
	    />
    );
	}
}

FishesList.defaultProps = {
	ds: new ListView.DataSource({
		rowHasChanged: (r1, r2) => r1.id !== r2.id,
	}),
};

FishesList.PropTypes = {
  data: PropTypes.array.isRequired,
};

export default FishesList;