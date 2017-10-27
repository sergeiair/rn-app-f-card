
const KShuffle = require('knuth-shuffle').knuthShuffle;

export default class RandomizerUtils {

	static getArray(initialLength = 1, resultLength = 0) {
		return KShuffle(
			Array
				.apply(null, {length: initialLength})
				.map((v, i) => i)
		).slice(0, resultLength);
	}
}