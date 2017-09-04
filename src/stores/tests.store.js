import { observable, action, computed } from 'mobx';


class TestsStore {
  @observable _progress = {
    current: null,
    selected: null,
    checked: false,
  };

  _itemsNumber = null;

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

  @action reset() {
    this.itemsNumber = null;
    this.progress = {
      current: null,
      selected: null,
      checked: false,
    };
  }
}

export default TestsStore;