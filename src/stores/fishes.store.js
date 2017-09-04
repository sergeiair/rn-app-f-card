import { observable, action, runInAction, computed } from 'mobx';

import FishModel from '../models/fish.model';

import { FishesStorageService } from './../storage/services';

class FishesStore {
  @observable _fishes = [];

  @action fetch() {
    runInAction("update fishes state after fetching data", () => {
	    new FishesStorageService()
        .get()
        .then(res => {
	        this.fishes = res.data.map(item => new FishModel(item));
        })
        .catch(err => {});
    });
  }

	@action reset() {
		this.fishes = []
	}

  set fishes(data) {
    this._fishes = data;
  }

  @computed get fishes() {
    return this._fishes;
  }
}

export default FishesStore;