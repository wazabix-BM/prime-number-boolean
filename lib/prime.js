class isPrime {
	constructor (bool, number, prime) {

		this.bool = bool;
		this.number = number;
		this.prime = prime;

	}
	static thisNumber (number) {
		let t = new Number;
		let bool = new Boolean (true);

		for (t = 2; t < number; t++) {
			if ((number % t) === 0) {
				bool = false;

				break;
			}
			else bool = true;

		}
		return bool;

	}
}

module.exports = isPrime;