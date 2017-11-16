import React from 'react';
import {
  Text,
  View,
  Image,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';
import { RkCard } from 'react-native-ui-kitten';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';


const RulesListItem = (props) => {
	const {data} = props;

  return (
    <View style={styles.itemWrap}>
	    <TouchableOpacity onPress={() => Actions.ruleContent({
		    ruleData: data, title: data.chapterName
	    })}>
		    <RkCard rkType='shadowed'>
			    <View rkCardHeader>
				    <Text style={styles.itemTitle}>
					    {data.chapterName}
					  </Text>
			    </View>
		    </RkCard>
	    </TouchableOpacity>
    </View>
  );
};

RulesListItem.PropTypes = {
  data: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
	itemWrap: {
		marginTop: 5
	},
	itemTitle: {
		fontSize: 15,
		textAlign: 'center'
	}
});

export default RulesListItem;