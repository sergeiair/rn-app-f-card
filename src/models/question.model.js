import R from 'ramda';
const uuidv4 = require('uuid/v4');

export default class QuestionModel {
  _question = null;

  constructor(data) {
    this._question = {
      question: data.q,
      options: (data.opt || []).map(item => {
        return {
	        uid: uuidv4(),
          text: item
        }
      }),
      arrayAnswer: R.is(Array, data.a) ? data.a : null,
      indexAnswer: R.is(Number, data.a) ? data.a : null,
    };
  }

  get question() {
    return this._question;
  }
}
