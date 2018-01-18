import React, { PureComponent } from 'react';
import {
	View,
	StyleSheet,
	Text,
	Image,
	Dimensions
} from 'react-native';

import Swiper from 'react-native-swiper';

import colors from '../../../core-styles/colors';


class TacklesComponent extends PureComponent {

	shouldComponentUpdate() {
		return false;
	}

	render() {
		return (
			<Swiper style={styles.wrapper} activeDotColor={colors.green}>
				<View style={styles.slide}>
					<Image style={styles.image}
						source={require('../../../images/tackles/simple_rod.jpg')}/>
					<Text style={styles.text}>Simple rod</Text>
				</View>
				<View style={styles.slide}>
					<Image style={styles.image}
						source={require('../../../images/tackles/spinning_rod.jpg')}/>
					<Text style={styles.text}>Spinning rod</Text>
				</View>
				<View style={styles.slide}>
					<Image style={styles.image}
						source={require('../../../images/tackles/ice_rod.jpg')}/>
					<Text style={styles.text}>Ice rod</Text>
				</View>
				<View style={styles.slide}>
					<Image style={styles.image}
						source={require('../../../images/tackles/fly_rod.jpg')}/>
					<Text style={styles.text}>Fly rod</Text>
				</View>
				<View style={styles.slide}>
					<Image style={styles.image}
						source={require('../../../images/tackles/hooks.jpg')}/>
					<Text style={styles.text}>Hooks</Text>
				</View>
				<View style={styles.slide}>
					<Image style={styles.image}
						source={require('../../../images/tackles/floats.jpg')}/>
					<Text style={styles.text}>Floats</Text>
				</View>
				<View style={styles.slide}>
					<Image style={styles.image}
						source={require('../../../images/tackles/line.jpg')}/>
					<Text style={styles.text}>Line</Text>
				</View>
				<View style={styles.slide}>
					<Image style={styles.image}
						source={require('../../../images/tackles/lure_popper.jpg')}/>
					<Text style={styles.text}>Popper</Text>
				</View>
				<View style={styles.slide}>
					<Image style={styles.image}
						source={require('../../../images/tackles/lure_spoon.jpg')}/>
					<Text style={styles.text}>Spoon</Text>
				</View>
				<View style={styles.slide}>
					<Image style={styles.image}
						source={require('../../../images/tackles/reel.jpg')}/>
					<Text style={styles.text}>Reel</Text>
				</View>
				<View style={styles.slide}>
					<Image style={styles.image}
						source={require('../../../images/tackles/sinkers.jpg')}/>
					<Text style={styles.text}>Sinkers</Text>
				</View>
				<View style={styles.slide}>
					<Image style={styles.image}
						source={require('../../../images/tackles/carp_net.jpg')}/>
					<Text style={styles.text}>Landing net</Text>
				</View>
			</Swiper>
		);
	}
}

const styles = StyleSheet.create({
	wrapper: {
		backgroundColor: colors.lightTone,
	},
	slide: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-around',
		padding: 5
	},
	image: {
		resizeMode: 'contain',
		width: Dimensions.get('window').width - 10
	},
	text: {
		padding: 10,
		fontSize: 22,
		textAlign: 'center',
		fontWeight: 'bold',
		color: colors.green2
	}
});

export default TacklesComponent;
