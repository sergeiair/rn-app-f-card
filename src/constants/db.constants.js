const RNFS = require('react-native-fs');

export const FISHES_DEFAULT_PATH = `${RNFS.DocumentDirectoryPath}/fishes_v11.realm`;
export const RULES_DEFAULT_PATH = `${RNFS.DocumentDirectoryPath}/rules_v2.realm`;
export const PLACES_DEFAULT_PATH = `${RNFS.DocumentDirectoryPath}/places_v5.realm`;

export const dbPath = {
	fishes: FISHES_DEFAULT_PATH,
	rules: RULES_DEFAULT_PATH,
	places: PLACES_DEFAULT_PATH,
};
