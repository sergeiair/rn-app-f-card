import BaseStorage from './base.storage.service';

class PlacesStorageService extends BaseStorage {
	constructor() {
		super('places');
	}
}

export default PlacesStorageService;