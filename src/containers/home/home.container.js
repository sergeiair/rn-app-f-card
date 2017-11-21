import React, { PureComponent } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { RkButton } from 'react-native-ui-kitten';
import { Actions } from 'react-native-router-flux';
import I18n from 'react-native-i18n';

import coreStyles from '../../core-styles/styles';

class HomeContainer extends PureComponent {
  render() {
    return (
      <View style={coreStyles.main}>
        <RkButton onPress={Actions.cards} >
          <Text >
            {I18n.t('buttons.nav.cards')}
          </Text>
        </RkButton>

        <RkButton onPress={Actions.questions} >
          <Text>
	          {I18n.t('buttons.nav.questions')}
          </Text>
        </RkButton>

        <RkButton onPress={Actions.fishes} style={coreStyles.defaultBtnGreen}>
          <Text >
	          {I18n.t('buttons.nav.fishes')}
          </Text>
        </RkButton>

        <RkButton onPress={Actions.rules} style={coreStyles.defaultBtnGreen}>
          <Text >
		        {I18n.t('buttons.nav.rules')}
          </Text>
        </RkButton>

        <RkButton onPress={Actions.places} style={coreStyles.defaultBtnGreen}>
          <Text >
	          {I18n.t('buttons.nav.places')}
          </Text>
        </RkButton>

        <RkButton onPress={Actions.settings} style={coreStyles.defaultBtnGreen}>
          <Text >Settings</Text>
        </RkButton>
      </View>
    );
  }
}

export default HomeContainer;
