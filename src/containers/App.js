import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { StyleSheet } from 'react-native';
import { useStrict } from 'mobx';

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
        barButtonTextStyle={styles.barButtonTextStyle}
        duration={0}>
          <Scene key="root">
            <Scene key="home" component={HomeContainer} initial={true} />
            <Scene key="cards" component={CardsContainer} title="Cards" />
            <Scene key="questions" component={QuestionsContainer} title="Questions" />
            <Scene key="fishes" component={FishesContainer} title="Fishes" />
            <Scene key="rules" component={RulesContainer} title="Rules" />
            <Scene key="places" component={PlacesContainer} title="Places"/>
            <Scene key="fish" component={FishContainer}/>
            <Scene key="ruleContent" component={RuleContentContainer}/>
            <Scene key="settings" component={SettingsContainer} title="Settings and info"/>
          </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
	navBar: {
		backgroundColor: colors.lightTone,
		borderBottomColor: colors.paleGrey,
		height: 55,
		borderBottomWidth: 1
	},
	navBarTitle: {
		fontSize: 17,
		lineHeight: 25,
    textAlign: 'center',
		color: colors.darkGrey
	},
	barButtonIconStyle: {
		marginLeft: 15,
		tintColor: colors.darkGrey
	}
});

