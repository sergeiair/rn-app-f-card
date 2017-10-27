import { observable, action, computed } from 'mobx';


class TestsStore {

  @observable _progress = this.initialState;

  _itemsNumber = null;

  get initialState() {
    return {
	    current: null,
	    selected: null,
	    correct: 0,
      wrong: -1,
	    checked: false,
    };
  }

  get nextElement() {
    return this.itemsNumber
      && this.progress.current !== null
      && this.progress.current < this.itemsNumber - 1
        ? this.progress.current + 1
        : null;
  }

  set progress(data) {
    this._progress = Object.assign({}, this._progress, data);
  }

  set itemsNumber(value) {
    this._itemsNumber = value;
  }

  get itemsNumber() {
    return this._itemsNumber;
  }

  @computed get progress() {
    return this._progress;
  }

  @action isSelected(index) {
    return this.progress.selected.indexOf(index) >= 0;
  }

  @action toggleSelection(index) {
    this.progress = {
      selected: this.progress.selected.indexOf(index) === -1
        ? [index, ...this.progress.selected]
        : this.progress.selected.filter(item => item !== index)
    };
  }

  @action checkItem() {
    this.progress = {
      checked: true,
    };
  }

  @action nextItem() {
    this.progress = {
      current: this.nextElement,
      selected: [],
      checked: false,
    };
  }

  @action start(itemsNumber) {
    this.itemsNumber = itemsNumber;

    this.progress = {
      current: 0,
      selected: [],
      checked: false,
    };
  }

	@action setCorrect() {
		this.progress = Object.assign({}, this.progress, {
		  correct: !this.progress.correct ? 1 : this.progress.correct + 1
    })
	}

	@action setWrong() {
		this.progress = Object.assign({}, this.progress, {
			wrong: !this.progress.wrong ? 1 : this.progress.wrong + 1
		})
	}

	@action setCorrectness(isCorrect) {
		isCorrect
      ? this.setCorrect()
      : this.setWrong();
	}

  @action reset() {
	  this.itemsNumber = null;

	  this.progress = this.initialState;
  }
}

export default TestsStore;