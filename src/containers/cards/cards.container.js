import React, {PureComponent} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { observer } from 'mobx-react/native';

import coreStyles from '../../core-styles/styles';

import CardsStore from './../../stores/cards.store';
import FishesStore from './../../stores/fishes.store';
import TestsStore from './../../stores/tests.store';

import FishesCardsView from './components/fishesCardsView.component';
import FishesCardsInitialView from './components/fishesCardsInitialView.component';

@observer
class CardsContainer extends PureComponent {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
	  const {fishesStore} = this.props;

	  fishesStore.fetch();
  }

	_showNext(prevCorrect) {
		const {fishesStore, cardsStore, testsStore} = this.props;

		testsStore.setCorrectness(prevCorrect === true);
		cardsStore.nextCard(fishesStore.fishes.length - 1, 4);
	}

  render() {
	  const {cardsStore, fishesStore, testsStore} = this.props;

	  if (fishesStore.fishes.length) {
		  return (
			  <View style={coreStyles.main}>
				  {
					  !cardsStore.current
						  ? <FishesCardsInitialView
							    showNext={this._showNext.bind(this)}/>
						  : <FishesCardsView
						      cardsStore={cardsStore}
						      fishesStore={fishesStore}
						      testsStore={testsStore}
						      showNext={this._showNext.bind(this)}/>
				  }
			  </View>
		  );
	  }

	  return null;
  }

  componentWillUnmount() {
    const {cardsStore, testsStore} = this.props;

	  cardsStore.reset();
	  testsStore.reset();
  }
}

CardsContainer.defaultProps = {
  cardsStore: new CardsStore(),
	fishesStore: new FishesStore(),
  testsStore: new TestsStore()
};

export default CardsContainer;