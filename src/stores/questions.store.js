import { observable, action, runInAction, computed } from 'mobx';

import QuestionModel from '../models/question.model';
import questionsData from './../assets/questions.index';

class QuestionsStore {
  @observable _questions = [];

  _area = null;

  @action prepareCollection() {
    runInAction("update questions state after fetching data", () => {
      this.questions = this.area ? (questionsData[this.area].list || [])
        .map(item => new QuestionModel(item)) : [];
    });
  }

  @action prepare(area) {
    this.area = area;
    this.prepareCollection();
  }

  @action reset() {
    this.questions = []
  }

  set area(value) {
    this._area = value;
  }

  get area() {
    return this._area;
  }

  set questions(data) {
    this._questions = data;
  }

  @computed get questions() {
    return this._questions;
  }
}

export default QuestionsStore;