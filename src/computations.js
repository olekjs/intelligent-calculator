class Computations {
	constructor() {
		//
	}
	calculateAddition(operationValue) {
		const firstNumber = /(\-[0-9]{0,9})|[0-9]{0,9}/.exec(operationValue);
		const secondNumber = /\+(\d[0-9]{0,9})/.exec(operationValue);

		return this.returnResult((parseInt(firstNumber) + parseInt(secondNumber)));

	}
	calculateSubtraction(operationValue) {
		const firstNumber = /\-[0-9]{1,9}|[0-9]{1,9}/.exec(operationValue);
		const secondNumber = /\-(\d*)/.exec(operationValue);

		return this.returnResult((parseInt(firstNumber) + parseInt(secondNumber)));
	}
	calculateMultiplication(operationValue) {
		const firstNumber = /\-[0-9]{0,9}|[0-9]{0,9}/.exec(operationValue);
		const secondNumber = /(\*(\d[0-9]{0,9}))|(\*(\-)(\d[0-9]{0,9}))/.exec(operationValue);

		const secondNumberRemoveEqual = parseInt(secondNumber[0].replace('*', ' '));

		return this.returnResult((parseInt(firstNumber[0]) * secondNumberRemoveEqual));
	}
	calculateDivision(operationValue) {
		const firstNumber = /\-[0-9]{0,9}|[0-9]{0,9}/.exec(operationValue);
	    const secondNumber = /\/(\d*)/.exec(operationValue);

	    return this.returnResult((parseInt(firstNumber)) / parseInt(secondNumber[1]));
	}
	calculateEquation(operationValue) {
		const character = /[a-z|A-Z]/.exec(operationValue);
		const firstNumber = parseInt(/([0-9]{1,9}[a-z|A-Z])|(\-[0-9]{1,9}[a-z|A-Z])/.exec(operationValue));
		const secondNumber = parseInt(/(\-|\+)[0-9]{1,9}[^[a-z]/.exec(operationValue));
		const thirdNumber = /(\=\-[0-9]{1,9})|(\=[0-9]{1,9})/.exec(operationValue);

		const thirdNumberRemoveEqual = parseInt(thirdNumber[0].replace('=', ' '));

		const transferSecondNumber = (secondNumber * -1) + thirdNumberRemoveEqual;
		const division = transferSecondNumber / firstNumber;

		this.returnResult(`${character} = ${division}`);
	}
}