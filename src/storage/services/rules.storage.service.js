import BaseStorage from './base.storage.service';

class RulesStorageService extends BaseStorage {
  constructor() {
    super('rules');
  }
}

export default RulesStorageService;
