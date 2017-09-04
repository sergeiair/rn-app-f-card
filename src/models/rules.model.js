export default class RulesModel {
	_chapter = null;

	constructor(data) {
		this._chapter = data;
	}

	get chapter() {
		return this._chapter;
	}
}
