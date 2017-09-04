import React from 'react';
import {
  Text,
  View,
  Image,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';

import colors from '../../../core-styles/colors';
import fishesImages from '../../../images/fishes';

const FishesListItem = (props) => {
	const {data} = props;

  return (
    <View style={styles.itemWrap}>
	    <TouchableOpacity onPress={() => Actions.fish({fishData: data})}>
		    <View style={styles.imageWrap}>
			    <Image style={styles.image}
			      source={fishesImages[data.fish.fishId]} />
			    <View style={styles.nameWrap}>
				    <Text style={styles.name}>
					    {data.fish.name.toUpperCase()}
				    </Text>
			    </View>
		    </View>
	    </TouchableOpacity>
    </View>
  );
};

FishesListItem.PropTypes = {
  data: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
	itemWrap: {
		flex: 1,
	  backgroundColor: colors.lightTone,
    marginBottom: 4,
		marginTop: 3,
		elevation: 2,
  },
	imageWrap: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		height: 120,
		elevation: 2,
  },
	nameWrap: {
	  flex: .4,
		height: 140,
    backgroundColor: colors.lightTone,
  },
	name: {
		height: 140,
		padding: 20,
		textAlign: 'center',
		fontSize: 15,
		color: colors.darkTone,
	},
	image: {
	  flex: .6,
	  resizeMode: 'center',
		width: null,
		height: 100,
    opacity: 1,
  }
});

export default FishesListItem;