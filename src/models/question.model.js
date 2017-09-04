import R from 'ramda';

export default class QuestionModel {
  _question = null;

  constructor(data) {
    this._question = {
      question: data.q,
      options: data.opt,
      arrayAnswer: R.is(Array, data.a) ? data.a : null,
      indexAnswer: R.is(Number, data.a) ? data.a : null,
    };
  }

  get question() {
    return this._question;
  }
}
