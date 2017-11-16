import React, {PureComponent} from 'react';
import {
	FlatList,
	StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

import RulesListItem from './rulesListItem.component';

import coreStyles from '../../../core-styles/styles';

class RulesList extends PureComponent {

	constructor() {
		super();
	}

	_getListItem({item}) {
		return (
			<RulesListItem data={item.chapter}/>
		);
	};

	render() {
		const {data} = this.props;

		return (
      <FlatList
	      style={coreStyles.scrollableWrap}
	      data={data}
	      keyExtractor={(item, index) => item.chapter.id}
	      renderItem={this._getListItem}/>
    );
	}
}

RulesList.defaultProps = {

};

RulesList.PropTypes = {
  data: PropTypes.array.isRequired,
};

const styles = StyleSheet.create({

});

export default RulesList;