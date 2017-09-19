import { PermissionsAndroid } from 'react-native';

import LocationServicesDialogBox from "react-native-android-location-services-dialog-box";

class LocationService {
	static ensureLocationEnabled() {
		LocationServicesDialogBox.checkLocationServicesIsEnabled({
			message: "You need a location enabled on your device",
			ok: "Ok",
			cancel: "Cancel",
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
