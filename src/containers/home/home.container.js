import React, { PureComponent } from 'react';
import { View, Text, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

import NavigationRow from './components/navigationRow.component';

import coreStyles from '../../core-styles/styles';


class HomeContainer extends PureComponent {
  render() {
    return (
      <View style={coreStyles.main}>
        <Image style={coreStyles.imageBg}
          source={require('./../../images/banners/fisher.png')}>
            <View style={coreStyles.imageBgContent}>
              <View style={coreStyles.rowAround}>
                <NavigationRow
                  action={Actions.cards}
                  iconCode={'fishing'}
                  textCode={'buttons.nav.cards'}/>
                <NavigationRow
                  action={Actions.questions}
                  iconCode={'testing'}
                  textCode={'buttons.nav.questions'}/>
              </View>
              <View style={coreStyles.rowAround}>
                <NavigationRow
                  action={Actions.fishes}
                  iconCode={'fish'}
                  textCode={'buttons.nav.fishes'}/>
                <NavigationRow
                  action={Actions.rules}
                  iconCode={'learning'}
                  textCode={'buttons.nav.rules'}/>
              </View>
              <View style={coreStyles.rowAround}>
                <NavigationRow
                  action={Actions.places}
                  iconCode={'river'}
                  textCode={'buttons.nav.places'}/>
                <NavigationRow
                  action={Actions.settings}
                  iconCode={'settings'}
                  textCode={'buttons.nav.settings'}/>
              </View>
	            <View style={coreStyles.rowStart}>
		            <NavigationRow
			            action={Actions.tackles}
			            iconCode={'tackles'}
			            textCode={'buttons.nav.places'}/>
	            </View>
            </View>
        </Image>
      </View>
    );
  }
}

export default HomeContainer;
