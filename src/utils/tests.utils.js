import RandomizerUtils from './randomizer.utils';

export default class TestsUtils {

  static *generateItem(dataLength, itemsLength, nextAllowed) {
    while (nextAllowed) {
	    let randomArray = RandomizerUtils.getArray(dataLength, itemsLength);
	    let randomIndex = Math.floor(Math.random() * itemsLength);

	    yield {
		    options: randomArray,
		    key: randomArray[randomIndex]
	    }
    }
	}
}