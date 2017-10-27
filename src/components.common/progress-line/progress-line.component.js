import React, {PureComponent}  from 'react';
import {
	View,
	Text,
	StyleSheet,
	Dimensions,
	Animated,
} from 'react-native';
import PropTypes from 'prop-types';

import colors from '../../core-styles/colors';

class ProgressLine extends PureComponent {

	constructor(props) {
		super(props);

		this.state = {
			transformAnimation: new Animated.Value(1),
		}
	}

	componentDidMount() {
		this.props.animate(this.animate.bind(this))
	}

	animate() {
		const {transformAnimation} = this.state;
		const {duration} = this.props;

		Animated.sequence([
			Animated.timing(
				transformAnimation,
				{
					toValue: 0,
					duration: 170,
				}
			),
      Animated.timing(
        transformAnimation,
        {
          toValue: Dimensions.get('window').width * -1,
          duration: duration - 200,
        }
      ),
		]).start(() => {});
  }

	render() {
		const {transformAnimation} = this.state;

	  return (
      <View>
        <Animated.View style={{
            ...StyleSheet.flatten(styles.progressBar),
            translateX: transformAnimation
			    }}>
        </Animated.View>
      </View>
    )
  }
}

ProgressLine.PropTypes = {
	duration: PropTypes.number.isRequired,
	animate: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
	progressBar: {
		height: 2,
		backgroundColor: colors.red2,
	},
});

export default ProgressLine;