import { observable, action, runInAction, computed } from 'mobx';

import QuestionModel from '../models/question.model';
import questionsData from './../assets/questions.index';

import BaseStorage from '../storage/services/base.storage.service';

class QuestionsStore {
  @observable _questions = [];

  @action prepareCollection() {
    runInAction("update questions state after fetching data", () => {
      this.questions = (questionsData['all'].list || [])
        .filter(item => item.lang === BaseStorage.localePrefix)
        .map(item => new QuestionModel(item));
    });
  }

  @action prepare() {
    this.prepareCollection();
  }

  @action reset() {
    this.questions = []
  }

  set questions(data) {
    this._questions = data;
  }

  @computed get questions() {
    return this._questions;
  }
}

export default QuestionsStore;