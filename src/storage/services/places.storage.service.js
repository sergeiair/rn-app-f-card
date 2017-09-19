import BaseStorage from './base.storage.service';

class PlacesStorageService extends BaseStorage {
	constructor() {
		super('places');
	}

	getNewItem(data) {
		return {
			id: this.nextId,
			type: 'own',
			name: data.name,
			latLng: data.latLng,
		};
	}
}

export default PlacesStorageService;