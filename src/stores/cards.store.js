import { observable, action, runInAction, computed } from 'mobx';

import TestsUtils from '../utils/tests.utils';


class CardsStore {
  @observable _current = null;

	@computed get current() {
		return this._current;
	}

	set current(data) {
		this._current = data ? Object.assign({}, data) : null;
	}

	@action nextCard(dataLength, itemsLength, nextAllowed = true) {
		this.current = TestsUtils
			.generateItem(dataLength, itemsLength, nextAllowed)
			.next()
			.value;
	}

	@action reset() {
		this.current = null;
	}
}

export default CardsStore;