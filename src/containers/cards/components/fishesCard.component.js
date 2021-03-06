import React, {PureComponent}  from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
	Dimensions,
} from 'react-native';
import { RkButton, RkCard } from 'react-native-ui-kitten';
import PropTypes from 'prop-types';

import IntervalsService from '../../../services/intervals.service';

import fishesImages from '../../../images/fishes';

import colors from '../../../core-styles/colors';


class FishesCard extends PureComponent {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const {proceed, intervalsRunner} = this.props;

		intervalsRunner.restart(proceed);
	}

  get options() {
	  const {data, currentState, proceed, intervalsRunner} = this.props;

	  return (
      <View style={styles.optionsWrap}>
	      {
	        currentState.options.map((el, i) =>
            <RkButton style={styles.option}
              rkType='rounded'
	            key={el.uid}
              onPress={() => {
              	proceed(currentState.key === el.option);
              	intervalsRunner.restart(proceed)}}>
	                {data[el.option].fish.name}
            </RkButton>
          )
	      }
      </View>
    );

  }

  get fishImage() {
	  const {data, currentState} = this.props;
	  const fishId = data[currentState.key].fish.fishId;

    return (
      <Image style={styles.image}
        resizeMode="contain"
        source={fishesImages[fishId]} />
    )
  }



  render() {
    return (
	    <View>
		    <RkCard
			    style={styles.imageWrap}
			    rkType='shadowed'>
			      {this.fishImage}
		    </RkCard>

		    <RkCard
			    style={styles.optionsCard}
			    rkType='shadowed'>
			      {this.options}
		    </RkCard>
	    </View>
    );
  }

	componentWillUnmount() {
		const {intervalsRunner} = this.props;

		intervalsRunner.dispose();
  }
}

FishesCard.PropTypes = {
  currentState: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  proceed: PropTypes.func.isRequired
};

FishesCard.defaultProps = {
	intervalsRunner: new IntervalsService(10000)
};

const styles = StyleSheet.create({
	optionsWrap: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		paddingLeft: 5,
		paddingRight: 5,
		paddingTop: 5,
		paddingBottom: 15
  },
	optionsCard: {
		marginLeft: 5,
		marginRight: 5
	},
	option: {
		marginTop: 10,
		width: (Dimensions.get('window').width / 2) - 20
	},
	imageWrap: {
		margin: 5,
		width: Dimensions.get('window').width - 10,
    backgroundColor: colors.lightTone
  },
	image: {
		width: Dimensions.get('window').width,
  }
});


export default FishesCard;