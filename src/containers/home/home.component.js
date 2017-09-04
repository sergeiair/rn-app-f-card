import React, {PureComponent} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import coreStyles from '../../core-styles/styles';

class HomeComponent extends PureComponent {
  render() {
    return (
      <View style={coreStyles.main}>
        <TouchableOpacity onPress={Actions.cards} style={coreStyles.defaultBtnBlue}>
          <Text style={coreStyles.whiteText}>Cards</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={Actions.questions} style={coreStyles.defaultBtnBlue}>
          <Text style={coreStyles.whiteText}>Questions</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={Actions.fishes} style={coreStyles.defaultBtnGreen}>
          <Text style={coreStyles.whiteText}>Fishes</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={Actions.rules} style={coreStyles.defaultBtnGreen}>
          <Text style={coreStyles.whiteText}>Rules</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={Actions.places} style={coreStyles.defaultBtnGreen}>
          <Text style={coreStyles.whiteText}>Places</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default HomeComponent;
