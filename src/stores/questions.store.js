import { observable, action, runInAction, computed } from 'mobx';

import QuestionModel from '../models/question.model';

import questionsData from './../assets/questions.all.json';

import BaseStorage from '../storage/services/base.storage.service';

import RandomizerUtils from '../utils/randomizer.utils';


class QuestionsStore {
  @observable _questions = [];

  @action prepareCollection() {
    runInAction("update questions state after fetching data", () => {
      this.questions = (questionsData.list || [])
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
    this._questions = data && data.length
      ? RandomizerUtils.getShuffledArray(data)
      : [];
  }

  @computed get questions() {
    return this._questions;
  }
}

export default QuestionsStore;