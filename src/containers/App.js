import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { useStrict } from 'mobx';
import { enableLogging } from 'mobx-logger';

import LocalizationService from './../services/localization.service';

import HomeContainer from './home/home.container';
import QuestionsContainer from './questions/questions.container';
import CardsContainer from './cards/cards.container';
import FishesContainer from './fishes/fishes.container';
import RulesContainer from './rules/rules.container';
import PlacesContainer from './places/places.container';
import FishContainer from './fish/fish.container';
import SettingsContainer from './settings/settings.container';

useStrict(true);

enableLogging({
  predicate: () => __DEV__ && Boolean(window.navigator.userAgent),
  action: true,
  reaction: false,
  compute: false
});

export default class App extends Component {

  constructor(props) {
    super(props);

	  LocalizationService.init();
  }

  render() {
    return (
      <Router duration={0}>
        <Scene key="root">
          <Scene key="home" component={HomeContainer} title="Home" initial={true} />
          <Scene key="cards" component={CardsContainer} title="Cards" />
          <Scene key="questions" component={QuestionsContainer} title="Questions" />
          <Scene key="fishes" component={FishesContainer} title="Fishes" />
          <Scene key="rules" component={RulesContainer} title="Rules" />
          <Scene key="places" component={PlacesContainer} title="Places"/>
          <Scene key="fish" component={FishContainer}/>
          <Scene key="settings" component={SettingsContainer}/>
        </Scene>
      </Router>
    );
  }
}

