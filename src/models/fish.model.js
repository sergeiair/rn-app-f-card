
export default class FishModel {
	_fish = null;

	constructor(data) {
		this._fish = data;
	}

	get fish() {
		return this._fish;
	}
}
