import React from 'react';
import {
  Text,
  View,
  Image,
	StyleSheet,
	TouchableOpacity,
	Dimensions
} from 'react-native';
import { RkCard } from 'react-native-ui-kitten';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';

import fishesImages from '../../../images/fishes';

const FishesListItem = (props) => {
	const {data} = props;

  return (
    <View style={styles.itemWrap}>
	    <TouchableOpacity onPress={() => Actions.fish({fishData: data})}>
		    <RkCard>
			    <View rkCardHeader>
				    <Text>
					    {data.fish.name.toUpperCase()}
				    </Text>
			    </View>
			    <View style={styles.itemImageWrap}>
				    <Image
					    resizeMode="contain"
					    style={styles.itemImage}
				      source={fishesImages[data.fish.fishId]}/>
			    </View>
		    </RkCard>
	    </TouchableOpacity>
    </View>
  );
};

FishesListItem.PropTypes = {
  data: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
	itemWrap: {
		marginTop: 5
	},
	itemImageWrap: {
		width: Dimensions.get('window').width - 12,
		flexDirection: 'row'
	},
	itemImage: {
		flex: 1
	}
});

export default FishesListItem;