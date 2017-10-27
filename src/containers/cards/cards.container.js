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

import FishesCard from './components/fishes-card.component';


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

  get initialView() {
    const {cardsStore} = this.props;

    return (
      <View>
        <Text style={coreStyles.title1}>
          Catch the fish >---|>
        </Text>
        <TouchableOpacity style={coreStyles.defaultBtnBlue}
          onPress={this._showNext.bind(this)}>
            <Text style={coreStyles.whiteText}>
              Start game
            </Text>
        </TouchableOpacity>
      </View>
    );
  }

  get cardsView() {
	  const {cardsStore, fishesStore, testsStore} = this.props;

    return (
      <View>
        <View>
          <Text>{testsStore.progress.correct}/{testsStore.progress.wrong}</Text>
        </View>

	      <FishesCard
          state={cardsStore.current}
          data={fishesStore.fishes}
          proceed={this._showNext.bind(this)}/>
      </View>
    );
  }

  get view() {
	  const {cardsStore, fishesStore} = this.props;

	  if (fishesStore.fishes.length) {
		  return !cardsStore.current
        ? this.initialView
        : this.cardsView
    }

	  return null;
  }

  render() {
    return (
      <View style={coreStyles.main}>
	      {this.view}
      </View>
    );
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