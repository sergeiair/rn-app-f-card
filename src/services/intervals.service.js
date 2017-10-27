import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';


class IntervalsService {

	constructor(period) {
		this.intervalSub$ = null;

		this.intervalSource$ = Observable
			.interval(period);
	}

	start(action) {
		this.intervalSub$ = this.intervalSource$
			.subscribe(action);
	}

	restart(action) {
		this.dispose();

		this.intervalSub$ = this.intervalSource$
			.subscribe(action);
	}

	dispose() {
		if (this.intervalSub$ && !this.intervalSub$.closed) {
			this.intervalSub$.unsubscribe();
		}
	}
}

export default IntervalsService;