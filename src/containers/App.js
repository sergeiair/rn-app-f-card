import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { StyleSheet } from 'react-native';
import { useStrict } from 'mobx';
import I18n from 'react-native-i18n';

import LocalizationService from './../services/localization.service';

import HomeContainer from './home/home.container';
import QuestionsContainer from './questions/questions.container';
import CardsContainer from './cards/cards.container';
import FishesContainer from './fishes/fishes.container';
import RulesContainer from './rules/rules.container';
import RuleContentContainer from './ruleContent/ruleContent.container';
import PlacesContainer from './places/places.container';
import FishContainer from './fish/fish.container';
import SettingsContainer from './settings/settings.container';
import TacklesContainer from './tackles/tackles.container';


import colors from '../core-styles/colors';

import '../core-styles/rk-styles';

useStrict(true);


export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      localeLoaded: false
    }
  }

  componentDidMount() {
	  LocalizationService
      .init()
        .finally(() => {
          this.setState({localeLoaded: true});
        })
  }

  render() {
    const {localeLoaded} = this.state;

    if (!localeLoaded) {
      return null;
    }

    return (
      <Router navigationBarStyle={styles.navBar}
        titleStyle={styles.navBarTitle}
        barButtonIconStyle={styles.barButtonIconStyle}
        duration={0}>
          <Scene key="root">
            <Scene key="home" component={HomeContainer} initial={true} title={I18n.t('texts.titles.welcome')}  />
            <Scene key="cards" component={CardsContainer} title={I18n.t('texts.titles.cards')}/>
            <Scene key="questions" component={QuestionsContainer} title={I18n.t('texts.titles.questions')} />
            <Scene key="fishes" component={FishesContainer} title={I18n.t('texts.titles.fishes')} />
            <Scene key="rules" component={RulesContainer} title={I18n.t('texts.titles.rules')} />
            <Scene key="places" component={PlacesContainer} title={I18n.t('texts.titles.places')}/>
            <Scene key="fish" component={FishContainer}/>
            <Scene key="ruleContent" component={RuleContentContainer}/>
            <Scene key="settings" component={SettingsContainer} title={I18n.t('texts.titles.settings')}/>
	          <Scene key="tackles" component={TacklesContainer} title={I18n.t('texts.titles.tackles')}/>
          </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
	navBar: {
		backgroundColor: colors.blue,
		borderBottomColor: colors.blue,
		height: 55,
		borderBottomWidth: 1
	},
	navBarTitle: {
		fontSize: 17,
		lineHeight: 26,
    textAlign: 'center',
		color: colors.lightTone
	},
	barButtonIconStyle: {
		marginLeft: 15,
		tintColor: colors.lightTone
	}
});

