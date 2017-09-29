import { observable, action, runInAction, computed } from 'mobx';

import PlaceModel from '../models/place.model';

import { PlacesStorageService } from './../storage/services';

class PlacesStore {
  @observable _places = [];

	_placesStorageService = null;

	get placesStorageService() {
		if (!this._placesStorageService) {
			this._placesStorageService = new PlacesStorageService();
		}

		return this._placesStorageService;
	}

  @action fetch() {
	  this.placesStorageService
		  .get()
		  .then(res => {
			  runInAction("update places state after fetching data", () => {
				  this.places = res.data.map(item => new PlaceModel(item));
			  });
		  })
		  .catch(err => {});
  }

  @computed get places() {
    return this._places;
  }

	set places(data) {
		this._places = data;
	}

	@action reset() {
		this.places = [];
	}

	@action addNew(data) {
  	let newItem = Object.assign({}, data, {
		  id: this.placesStorageService.nextId,
	  });

		this.placesStorageService.write(newItem).then(() => {
			runInAction("update places state after adding place", () => {
				this.places = [...this.places, new PlaceModel(newItem)];
			});
		}).catch((err) => {});
	}


	@action drop(id, index) {
		const filteredArray = this.places.filter((item, i) => i !== index);

		this.placesStorageService.drop(id).then(() => {
			runInAction("update places state after deleting place", () => {
				this.places = filteredArray;
			});
		}).catch((err) => {});
	}
}

export default PlacesStore;