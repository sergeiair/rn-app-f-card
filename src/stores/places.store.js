import { observable, action, runInAction, computed } from 'mobx';

import PlaceModel from '../models/place.model';

import { PlacesStorageService } from './../storage/services';

class PlacesStore {
  @observable _places = [];

  constructor() {
  	this.placesStorageService = new PlacesStorageService();
  }

  @action fetch() {
    runInAction("update places state after fetching data", () => {
	    this.placesStorageService
        .get()
        .then(res => {
	        this.places = res.data.map(item => new PlaceModel(item));
        })
        .catch(err => {});
    });
  }

  set places(data) {
    this._places = data;
  }

  @computed get places() {
    return this._places;
  }

	@action reset() {
		this.places = []
	}

	@action addNew(data) {
		let newItem = this.placesStorageService.getNewItem(data);

		this.placesStorageService.write(newItem).then(() => {
			this.places = [...this.places, newItem];
		}).catch((err) => {

		});
	}
}

export default PlacesStore;