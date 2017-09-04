import React, {PureComponent} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { observer } from 'mobx-react/native';

import coreStyles from '../../core-styles/styles';

import CardsStore from './../../stores/cards.store';
import TestsStore from './../../stores/tests.store';

import Card from './card.component';

@observer
class CardsComponent extends PureComponent {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
	  const {cardsStore} = this.props;

	  cardsStore.prepareCards();
  }

  get currentCard() {
    const {cardsStore, testsStore} = this.props;

    return cardsStore.cards[testsStore.progress.current];
  }

  get initialView() {
    const {cardsStore, testsStore} = this.props;

    return (
      <View>
        <Text style={coreStyles.title1}>
          CARDS TO OBSERVE: {cardsStore.cards.length}
        </Text>
        <TouchableOpacity style={coreStyles.defaultBtnBlue}
          onPress={testsStore.start.bind(testsStore, cardsStore.cards.length)}>
            <Text style={coreStyles.whiteText}>Start cards</Text>
        </TouchableOpacity>
      </View>
    );
  }

  get progressButtons() {
    const {testsStore} = this.props;

    return testsStore.progress.checked
      ? (
        <TouchableOpacity onPress={testsStore.nextItem.bind(testsStore)}
          style={coreStyles.defaultBtnGreen}>
            <Text style={coreStyles.whiteText}>Next</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={testsStore.checkItem.bind(testsStore)}
          style={coreStyles.defaultBtnBlue}>
            <Text style={coreStyles.whiteText}>Check answer</Text>
        </TouchableOpacity>
      );
  }

  get cardView() {
    const {testsStore} = this.props;

    return (
      <View style={coreStyles.wrap}>
        <View style={coreStyles.body}>
          <Card data={this.currentCard}
            checked={testsStore.progress.checked}/>
        </View>
        <View style={coreStyles.footer}>
          {this.progressButtons}
        </View>
      </View>
    );
  }

  render() {
    const {testsStore} = this.props;

    return (
      <View style={coreStyles.main}>
        {
          testsStore.progress.current === null
            ? this.initialView
            : this.cardView
        }
      </View>
    );
  }

  componentWillUnmount() {
    const {testsStore, cardsStore} = this.props;

	  cardsStore.reset();
    testsStore.reset();
  }
}

CardsComponent.defaultProps = {
  cardsStore: new CardsStore(),
  testsStore: new TestsStore(),
};

export default CardsComponent;