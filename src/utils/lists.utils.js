import { ListView } from 'react-native';

export default class ListsUtils {

	static arrayToDataSource(array) {
		return new ListView
			.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id})
			.cloneWithRows(array);
	}

}
