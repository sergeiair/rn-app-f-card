import I18n from 'react-native-i18n';

import { dbPath } from './../../constants/db.constants';
import { dbSchemes } from './../../storage/schemes';

const Realm = require('realm');

export default class BaseStorage {
  constructor(schemaName) {
	  Realm.defaultPath = dbPath[schemaName];
	  
	  this.schemaName = schemaName;
    this.provider = new Realm({
      schema: [ ...dbSchemes[this.schemaName] ],
    });
  }

	static get localePrefix() {
		const localePart = I18n.currentLocale()
			? I18n.currentLocale().split('-')[0]
			: I18n.defaultLocale.split('-')[0];

		return localePart || 'en';
	}

  get localeString() {
	  const locale = I18n.currentLocale()
		  ? I18n.currentLocale().split('-')[0]
		  : I18n.defaultLocale.split('-')[0];

    return `lang='${locale}'`;
  }

  set provider(instance) {
	  this._provider = instance;
  }

  get provider() {
    return this._provider;
  }

  get nextId() {
    const collection = this.provider.objects(this.schemaName).sorted('id');

    return collection.length && collection[collection.length - 1]
      ? collection[collection.length - 1].id + 1 : 1;
  }

  getLocalized(filterString = '', sortString = '', toArray = true) {
    const searchString = !filterString
      ? this.localeString
      : this.localeString + '&' + filterString;

    return this.get(searchString, sortString, toArray);
  }

  get(filterString = '', sortString = '', toArray = true) {
    return new Promise((resolve, reject) => {
      try {
        const objects = filterString.length
          ? this.provider.objects(this.schemaName)
              .filtered(filterString)
          : this.provider.objects(this.schemaName);

        const objectsSorted = sortString.length
          ? objects.sorted(sortString)
          : objects;

        toArray
          ? resolve({data: objectsSorted.map(el => el),
              name: this.schemaName})
          : resolve({data: objectsSorted,
              name: this.schemaName});
      }
      catch (err) {
        reject(err);
      }
    });
  }

  write(data, update = false) {
    return new Promise((resolve, reject) => {
      !this.provider
        ? reject(null)
        : this.provider
          .write(() => {
            try {
              this.provider
                .create(this.schemaName, data, update);

              resolve(data);
            }
            catch (err) {
              reject(err);
            }
         });
    });
  }

  drop(id, field = 'id') {
    return new Promise((resolve, reject) => {
      try {
        const object = this.provider
          .objects(this.schemaName)
          .filtered(`${field}=${id}`);

        this.provider
          .write(() => {
            this.provider.delete(object);
          });

        resolve(id);
      }
      catch (err) {
        reject(err);
      }
    });
  }
}
