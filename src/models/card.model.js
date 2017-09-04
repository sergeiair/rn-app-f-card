import R from 'ramda';

export default class CardModel {
  _card = null;

  constructor(data) {
    this._card = {
      question: data.q,
      textAnswer: R.is(String, data.a) ? data.a : null,
      arrayAnswer: R.is(Array, data.a) ? data.a : null,
    };
  }

  get card() {
    return this._card;
  }
}
