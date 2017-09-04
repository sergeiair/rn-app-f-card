import React, {PureComponent} from 'react';
import {
	ListView,
	StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

import colors from '../../../core-styles/colors';
import FishesListItem from './fishesListItem.component';

class FishesList extends PureComponent {

	constructor() {
		super();
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

const styles = StyleSheet.create({
	list: {
		backgroundColor: colors.lightBlue,
	},
});

export default FishesList;