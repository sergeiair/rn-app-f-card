
const kShuffle = require('knuth-shuffle').knuthShuffle;

export default class RandomizerUtils {

	static getRandomSlicedArray(initialLength = 1, resultLength = 0) {
		return kShuffle(
			Array
				.apply(null, {length: initialLength})
				.map((v, i) => i)
		).slice(0, resultLength);
	}

	static getShuffledArray(arr = []) {
		return kShuffle([...arr]);
	}
}