import React, { PureComponent } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { StyleSheet } from 'react-native';
import { useStrict } from 'mobx';
import I18n from 'react-native-i18n';

import LocalizationService from './../services/localization.service';

import FirstRunContainer from './firstRun/firstRun.container';
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

export default class App extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      localeLoaded: false,
	    localeReading: true
    }
  }

  componentDidMount() {
	  LocalizationService
      .init()
        .then(() => {
          this.setState({
	          localeLoaded: true,
	          localeReading: false
          });
        })
	      .catch(() => {
		      this.setState({
			      localeLoaded: false,
			      localeReading: false
		      });
	      });
  }

	get firstRunRoutes() {
		return (
			<Scene key="root">
				<Scene key="firstRun" initial={true} component={FirstRunContainer} title={'Welcome!'}/>
			</Scene>
		);
	}

  get appRoutes() {
  	return (
		  <Scene key="root">
			  <Scene key="home"
			    initial={true}
			    component={HomeContainer}
			    title={I18n.t('texts.titles.welcome')}
			    panHandlers={null}/>
			  <Scene key="cards"
			    component={CardsContainer}
			    title={I18n.t('texts.titles.cards')}
			    panHandlers={null}/>
			  <Scene key="questions"
			    component={QuestionsContainer}
			    title={I18n.t('texts.titles.questions')}
			    panHandlers={null}/>
			  <Scene key="fishes"
			    component={FishesContainer}
			    title={I18n.t('texts.titles.fishes')}
			    panHandlers={null}/>
			  <Scene key="rules"
			    component={RulesContainer}
			    title={I18n.t('texts.titles.rules')}
			    panHandlers={null}/>
			  <Scene key="places"
			    component={PlacesContainer}
			    title={I18n.t('texts.titles.places')}
			    panHandlers={null}/>
			  <Scene key="fish"
			    component={FishContainer}
			    panHandlers={null}/>
			  <Scene key="ruleContent"
			    component={RuleContentContainer}
			    panHandlers={null}/>
			  <Scene key="settings"
			    component={SettingsContainer}
			    title={I18n.t('texts.titles.settings')}
			    panHandlers={null}/>
			  <Scene key="tackles"
			    component={TacklesContainer}
			    title={I18n.t('texts.titles.tackles')}
			    panHandlers={null}/>
		  </Scene>
	  );
  }

  render() {
    const {localeLoaded, localeReading} = this.state;

    if(localeReading) {
    	return null;
    }

    return (
      <Router navigationBarStyle={styles.navBar}
        titleStyle={styles.navBarTitle}
        barButtonIconStyle={styles.barButtonIconStyle}
        duration={0}>
		      {localeLoaded ? this.appRoutes : this.firstRunRoutes}
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

