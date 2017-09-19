
export default class PlaceModel {
	_place = null;

	constructor(data) {
		this._place = data;
	}

	get place() {
		return this._place;
	}
}
