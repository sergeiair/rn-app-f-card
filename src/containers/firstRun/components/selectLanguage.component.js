import React, {PureComponent} from 'react';
import {
  View,
	Text,
	Image,
	TouchableOpacity,
	StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';

import colors from '../../../core-styles/colors';


class SelectLanguageComponent extends PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
  	const {select} = this.props;

    return (
      <View style={styles.wrap}>
	      <Text style={styles.text}>
		      Please select your language
	      </Text>
				<TouchableOpacity onPress={select.bind(null, 'pl-PL')}>
					<Image
						style={styles.icon}
						resizeMode="contain"
						source={require('./../../../images/icons/pl.png')}/>
				</TouchableOpacity>
	      <TouchableOpacity onPress={select.bind(null, 'en-US')}>
		      <Image
			      style={styles.icon}
			      resizeMode="contain"
			      source={require('./../../../images/icons/uk.png')}/>
	      </TouchableOpacity>
	      <TouchableOpacity onPress={select.bind(null, 'ru-RU')}>
		      <Image
			      style={styles.icon}
			      resizeMode="contain"
			      source={require('./../../../images/icons/ru.png')}/>
	      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	wrap: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.violet
	},
	icon: {
		height: 80,
		marginBottom: 15,
		borderRadius: 2
	},
	text: {
		marginBottom: 20,
		padding: 10,
		textAlign: 'center',
		fontSize: 18,
		fontWeight: '100',
		color: colors.lightTone,
	}
});

SelectLanguageComponent.propTypes = {
	select: PropTypes.func.isRequired
};

export default SelectLanguageComponent;