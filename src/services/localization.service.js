import { AsyncStorage } from 'react-native';

import RNRestart from 'react-native-restart';
import I18n from 'react-native-i18n';

class LocalizationService {

	static async init() {
		I18n.defaultLocale = 'en-US';
		I18n.fallbacks = true;

		try {
			const value = await AsyncStorage.getItem('@SettingsStore:locale');

			if (typeof value === 'string'){
				I18n.locale = value;
			}
		} catch (error) {}
	}

	static async setLocale(value) {
		I18n.locale = value;

		try {
			await AsyncStorage.setItem('@SettingsStore:locale', value);

			RNRestart.Restart();
		} catch (error) {}
	}
}

export default LocalizationService;