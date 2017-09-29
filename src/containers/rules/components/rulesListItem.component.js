import React from 'react';
import {
  Text,
  View,
  Image,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';
import { RkCard, RkButton } from 'react-native-ui-kitten';
import PropTypes from 'prop-types';

import colors from '../../../core-styles/colors';
//import fishesImages from '../../../images/fishes';

const RulesListItem = (props) => {
	const {data} = props;

  return (
    <View style={styles.itemWrap}>
	    <RkCard rkType='shadowed'>
		    <View rkCardHeader>
			    <Text style={styles.itemTitle}>
				    {data.chapterName}
				    </Text>
		    </View>
		    <Image rkCardImg source={require('../../../images/fishes/amur.jpg')}/>
	    </RkCard>
    </View>
  );
};

RulesListItem.PropTypes = {
  data: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
	itemWrap: {
		marginTop: 15,
	},
	itemTitle: {
		fontSize: 20,
	}
});

export default RulesListItem;