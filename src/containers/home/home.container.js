import React, { PureComponent } from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet,
	TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import I18n from 'react-native-i18n';

import coreStyles from '../../core-styles/styles';
import colors from "../../core-styles/colors";


class HomeContainer extends PureComponent {
  render() {
    return (
      <View style={coreStyles.main}>
        <Image style={coreStyles.imageBg}
          source={require('./../../images/banners/fisher.png')}>
	          <View style={styles.body}>
							<TouchableOpacity style={styles.navItemCards}
								onPress={Actions.cards}>
									<Text style={styles.navItemText}>
										{I18n.t('buttons.nav.cards')}
									</Text>
							</TouchableOpacity>
		          <TouchableOpacity style={styles.navItemFishes}
		            onPress={Actions.fishes}>
				          <Text style={styles.navItemText}>
					          {I18n.t('buttons.nav.fishes')}
				          </Text>
		          </TouchableOpacity>
		          <TouchableOpacity style={styles.navItemTackles}
		            onPress={Actions.tackles}>
				          <Text style={styles.navItemText}>
					          {I18n.t('buttons.nav.tackles')}
				          </Text>
		          </TouchableOpacity>
		          <TouchableOpacity style={styles.navItemPlaces}
		            onPress={Actions.places}>
				          <Text style={styles.navItemText}>
					          {I18n.t('buttons.nav.places')}
				          </Text>
		          </TouchableOpacity>
		          <TouchableOpacity style={styles.navItemQuestions}
		             onPress={Actions.questions}>
				          <Text style={styles.navItemText}>
					          {I18n.t('buttons.nav.questions')}
				          </Text>
		          </TouchableOpacity>
		          <TouchableOpacity style={styles.navItemRules}
		            onPress={Actions.rules}>
				          <Text style={styles.navItemText}>
					          {I18n.t('buttons.nav.rules')}
				          </Text>
		          </TouchableOpacity>
		          <TouchableOpacity style={styles.navItemSettings}
		            onPress={Actions.settings}>
				          <Text style={styles.navItemText}>
					          {I18n.t('buttons.nav.settings')}
				          </Text>
		          </TouchableOpacity>
	          </View>
        </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	body: {
		flex: 1
	},
	navItemCards: {
		position: 'absolute',
		right: 30,
		top: 30
	},
	navItemFishes: {
		position: 'absolute',
		right: 50,
		bottom: 100
	},
	navItemTackles: {
		position: 'absolute',
		left: 120,
		top: 120
	},
	navItemPlaces: {
		position: 'absolute',
		left: 150,
		bottom: 250
	},
	navItemQuestions: {
		position: 'absolute',
		left: 20,
		top: 20
	},
	navItemRules: {
		position: 'absolute',
		right: 30,
		top: 220
	},
	navItemSettings: {
		position: 'absolute',
		left: 20,
		bottom: 100
	},
	navItemText: {
		width: 75,
		height: 75,
		paddingTop: 30,
		borderRadius: 75,
		fontSize: 12,
		textAlign: 'center',
		borderWidth: 4,
		borderColor: colors.yellowTone2tr,
		backgroundColor: colors.yellowTonetr
	}
});

export default HomeContainer;
