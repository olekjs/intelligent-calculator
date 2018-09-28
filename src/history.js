class History {
	constructor() {
		this.operations = [];
	}
	addOperationToHistory(operationValue, result, solution = null) {
		this.operations.push({ operationValue: operationValue, result: result, solution: solution });
	}
	refreshHistory() {
		this.operations.forEach(function(element){
			$('.history').append(element.operationValue + ' ' + element.result);
		});
	}
}