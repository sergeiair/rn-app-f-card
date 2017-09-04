import { observable, action, runInAction, computed } from 'mobx';

import CardModel from '../models/card.model';

const cardsQuestions = require('./../assets/questions.cards.json');

class CardsStore {
  @observable _cards = [];

  @action prepareCards() {
    runInAction("update cards state after fetching data", () => {
      this.cards = cardsQuestions.list
        .map(item => new CardModel(item));
    });
  }

	@action reset() {
		this.cards = []
	}

  set cards(data) {
    this._cards = data;
  }

	@computed get cards() {
		return this._cards;
	}
}

export default CardsStore;