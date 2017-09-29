
export default class PlaceModel {
	_place = null;

	constructor(data) {
		this._place = Object.assign({}, data, {
			latLngObject: this.latLngStringToObject(data.latLng),
		});
	}

	get place() {
		return this._place;
	}

	latLngStringToObject(latLngSting) {
		return latLngSting.split(',')
			.reduce((acc, curr, index) => {
				if(index === 0) {
					acc.latitude = parseFloat(curr)
				} else if (index === 1) {
					acc.longitude = parseFloat(curr)
				}
				return acc;
			}, {});
	}
}
