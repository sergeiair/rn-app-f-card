import BaseStorage from './base.storage.service';

class FishesStorageService extends BaseStorage {
  constructor() {
    super('fishes');
  }
}

export default FishesStorageService;
