import { AsyncStorage } from 'react-native';
import RNRestart from 'react-native-restart';
import I18n from 'react-native-i18n';

I18n.defaultLocale = 'en-US';
I18n.fallbacks = true;

class LocalizationService {

	static async init() {
		const value = await AsyncStorage.getItem('@SettingsStore:locale');

		return new Promise((resolve) => {
			if (typeof value === 'string') {
				I18n.locale = value;

				resolve(value);
			} else {

				reject();
			}
		});

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