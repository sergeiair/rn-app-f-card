import React, { PureComponent } from 'react';
import {
	View,
	StyleSheet,
	Text,
	Image,
	Dimensions
} from 'react-native';
import Swiper from 'react-native-swiper';
import I18n from 'react-native-i18n';

import colors from '../../../core-styles/colors';


class TacklesComponent extends PureComponent {

	shouldComponentUpdate() {
		return false;
	}

	render() {
		return (
			<Swiper style={styles.wrapper}
				dotColor={colors.yellowTone2}
				activeDotColor={colors.blue}>
					<View style={styles.slide}>
						<Image style={styles.image}
							source={require('../../../images/tackles/simple_rod.jpg')}/>
						<Text style={styles.text}>
							{I18n.t('texts.tackles.simpleRod')}
						</Text>
					</View>
					<View style={styles.slide}>
						<Image style={styles.image}
							source={require('../../../images/tackles/spinning_rod.jpg')}/>
						<Text style={styles.text}>
							{I18n.t('texts.tackles.spinningRod')}
						</Text>
					</View>
					<View style={styles.slide}>
						<Image style={styles.image}
							source={require('../../../images/tackles/ice_rod.jpg')}/>
						<Text style={styles.text}>
							{I18n.t('texts.tackles.iceRod')}
						</Text>
					</View>
					<View style={styles.slide}>
						<Image style={styles.image}
							source={require('../../../images/tackles/fly_rod.jpg')}/>
						<Text style={styles.text}>
							{I18n.t('texts.tackles.flyRod')}
						</Text>
					</View>
					<View style={styles.slide}>
						<Image style={styles.image}
							source={require('../../../images/tackles/hooks.jpg')}/>
						<Text style={styles.text}>
							{I18n.t('texts.tackles.hooks')}
						</Text>
					</View>
					<View style={styles.slide}>
						<Image style={styles.image}
							source={require('../../../images/tackles/floats.jpg')}/>
						<Text style={styles.text}>
							{I18n.t('texts.tackles.floats')}
						</Text>
					</View>
					<View style={styles.slide}>
						<Image style={styles.image}
							source={require('../../../images/tackles/line.jpg')}/>
						<Text style={styles.text}>
							{I18n.t('texts.tackles.line')}
						</Text>
					</View>
					<View style={styles.slide}>
						<Image style={styles.image}
							source={require('../../../images/tackles/lure_popper.jpg')}/>
						<Text style={styles.text}>
							{I18n.t('texts.tackles.popper')}
						</Text>
					</View>
					<View style={styles.slide}>
						<Image style={styles.image}
							source={require('../../../images/tackles/twister.jpg')}/>
						<Text style={styles.text}>
							{I18n.t('texts.tackles.twister')}
						</Text>
					</View>
					<View style={styles.slide}>
						<Image style={styles.image}
							source={require('../../../images/tackles/lure_spoon.jpg')}/>
						<Text style={styles.text}>
							{I18n.t('texts.tackles.spoon')}
						</Text>
					</View>
					<View style={styles.slide}>
						<Image style={styles.image}
							source={require('../../../images/tackles/reel.jpg')}/>
						<Text style={styles.text}>
							{I18n.t('texts.tackles.reel')}
						</Text>
					</View>
					<View style={styles.slide}>
						<Image style={styles.image}
							source={require('../../../images/tackles/sinkers.jpg')}/>
						<Text style={styles.text}>
							{I18n.t('texts.tackles.sinkers')}
						</Text>
					</View>
					<View style={styles.slide}>
						<Image style={styles.image}
							source={require('../../../images/tackles/attractant.jpg')}/>
						<Text style={styles.text}>
							{I18n.t('texts.tackles.attractant')}
						</Text>
					</View>
					<View style={styles.slide}>
						<Image style={styles.image}
							source={require('../../../images/tackles/carp_net.jpg')}/>
						<Text style={styles.text}>
							{I18n.t('texts.tackles.landingNet')}
						</Text>
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
		color: colors.blue
	}
});

export default TacklesComponent;
