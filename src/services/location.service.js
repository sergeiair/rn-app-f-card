import { PermissionsAndroid } from 'react-native';
import I18n from 'react-native-i18n';

import LocationServicesDialogBox from "react-native-android-location-services-dialog-box";

class LocationService {
	static ensureLocationEnabled() {
		LocationServicesDialogBox.checkLocationServicesIsEnabled({
			message: I18n.t('texts.places.locationNeeded'),
			ok: I18n.t('buttons.ok'),
			cancel: I18n.t('buttons.cancel'),
			enableHighAccuracy: true,
			showDialog: true
		}).catch(error => error);
	}

	static async resolveLocation() {
		const granted = await PermissionsAndroid.request(
			PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
		);

		return new Promise((resolve, reject) => {
			if (granted === PermissionsAndroid.RESULTS.GRANTED) {
				navigator.geolocation.getCurrentPosition((res) => {
						resolve(res.coords);
					}, (err) => {
						reject(err);
					}, {
						timeout: 30000,
						maximumAge: 5000,
					}
				);
			} else {
				reject({message: 'no permission'});
			}
		});
	}
}

export default LocationService;
