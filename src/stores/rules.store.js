import { observable, action, runInAction, computed } from 'mobx';

import RulesModel from '../models/rules.model';

import { RulesStorageService } from './../storage/services';

class RulesStore {
  @observable _rules = [];

	_rulesStorageService = null;

	get placesStorageService() {
		if (!this._rulesStorageService) {
			this._rulesStorageService = new RulesStorageService();
		}

		return this._rulesStorageService;
	}

  @action fetch() {
    runInAction("update rules state after fetching data", () => {
	    this.placesStorageService
        .get()
        .then(res => {
	        this.rules = res.data.map(item => new RulesModel(item));
        })
        .catch(err => {});
    });
  }

	@action reset() {
		this.rules = []
	}

  set rules(data) {
    this._rules = data;
  }

  @computed get rules() {
    return this._rules;
  }
}

export default RulesStore;