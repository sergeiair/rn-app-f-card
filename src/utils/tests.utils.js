import RandomizerUtils from './randomizer.utils';

const uuidv4 = require('uuid/v4');


export default class TestsUtils {

  static *generateItem(dataLength, itemsLength, nextAllowed) {
    while (nextAllowed) {
	    const randomArray = RandomizerUtils.getRandomSlicedArray(dataLength, itemsLength);
	    const randomIndex = Math.floor(Math.random() * itemsLength);

	    yield {
		    options: randomArray.map(el => {
		    	return {
		    		uid: uuidv4(),
		    		option: el
			    }
		    }),
		    key: randomArray[randomIndex]
	    }
    }
	}
}