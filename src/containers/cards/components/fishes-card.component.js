import React, {PureComponent}  from 'react';
import {
  View,
  Text,
  StyleSheet,
	TouchableOpacity,
  Image,
	Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';

import IntervalsService from '../../../services/intervals.service';

import fishesImages from '../../../images/fishes';

import coreStyles from '../../../core-styles/styles';
import colors from '../../../core-styles/colors';


class FishesCard extends PureComponent {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const {proceed, intervalsRunner} = this.props;

		intervalsRunner.start(proceed);
	}

  get options() {
	  const {data, state, proceed, intervalsRunner} = this.props;

	  return (
      <View>
	      {
	        state.options.map((el, i) =>
            <TouchableOpacity key={i}
              style={coreStyles.defaultBtnGreen}
              onPress={() => {
              	proceed(state.key === el);
              	intervalsRunner.restart(proceed)}}>
                  <Text>{data[el].fish.name}</Text>
            </TouchableOpacity>
          )
	      }
      </View>
    );

  }

  get fishImage() {
	  const {data, state} = this.props;
	  const fishId = data[state.key].fish.fishId;

    return (
      <Image style={styles.image}
        resizeMode="contain"
        source={fishesImages[fishId]} />
    )
  }



  render() {
    const {data, state, proceed} = this.props;

    return (
	    <View style={styles.cardWrap}>
	      <View style={styles.imageWrap}>
		      {this.fishImage}
	      </View>
		    <View>
			    {this.options}
		    </View>
	    </View>
    );
  }

	componentWillUnmount() {
		const {intervalsRunner} = this.props;

		intervalsRunner.dispose();
  }
}

FishesCard.PropTypes = {
  state: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  proceed: PropTypes.func.isRequired
};

FishesCard.defaultProps = {
	intervalsRunner: new IntervalsService(10000),
};

const styles = StyleSheet.create({
	cardWrap: {

  },
	progressBar: {
		backgroundColor: colors.lightBlue,
	},
	imageWrap: {
		width: Dimensions.get('window').width,
    backgroundColor: colors.lightTone
  },
	image: {
		width: Dimensions.get('window').width,
  }
});


export default FishesCard;