import React, {PureComponent} from 'react';
import {
  View,
  Text,
  StyleSheet,
	Image,
  Dimensions
} from 'react-native';
import { RkCard } from 'react-native-ui-kitten';
import PropTypes from 'prop-types';
import I18n from 'react-native-i18n';

import fishesImages from '../../../images/fishes';

import colors from '../../../core-styles/colors';


class FishItemComponent extends PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
	  const {fishData} = this.props;

    return (
      <View>
        <RkCard style={styles.itemWrap}>
          <View>
            <Image
              resizeMode="contain"
              style={styles.itemImage}
              source={fishesImages[fishData.fish.fishId]}/>
          </View>
          <View style={styles.content}>

            <Text style={styles.itemFishInfoLabel}>
	            {I18n.t('texts.fishes.family')}
            </Text>
            <Text style={styles.itemFishInfo}>
	            {fishData.fish.family}
            </Text>

            <Text style={styles.itemFishInfoLabel}>
	            {I18n.t('texts.fishes.protectedPeriod')}
            </Text>
            <Text style={styles.itemFishInfo}>
	            {fishData.fish.protectedPeriod || '-'}
            </Text>

            <Text style={styles.itemFishInfoLabel}>
	            {I18n.t('texts.fishes.protectedQuota')}
            </Text>
            <Text style={styles.itemFishInfo}>
		          {fishData.fish.protectedLimit.toString()}
            </Text>

            <Text style={styles.itemFishInfoLabel}>
	            {I18n.t('texts.fishes.description')}
            </Text>
            <Text style={styles.itemFishInfoDescr}>
		          {fishData.fish.description || '-'}
            </Text>
          </View>
        </RkCard>
      </View>
    );
  }
}

FishItemComponent.propTypes = {
  fishData: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
	itemWrap: {
	  backgroundColor: colors.lightTone,
    paddingBottom: 10,
		marginTop: 10,
		marginLeft: 5,
		marginRight: 5
  },
	itemImage: {
		width: Dimensions.get('window').width,
  },
	content: {
		borderTopWidth: 1,
		borderTopColor: colors.grey
	},
	itemFishInfo: {
		fontSize: 16,
		marginLeft: 10,
		textAlign: 'center',
		color: colors.blue
  },
	itemFishInfoDescr: {
		fontSize: 12,
		marginLeft: 10,
		textAlign: 'center',
		color: colors.blue,
  },
	itemFishInfoLabel: {
		marginLeft: 10,
		marginTop: 10,
		textAlign: 'center'
  }
});

export default FishItemComponent;