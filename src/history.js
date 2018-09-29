class History {
	constructor() {
		//
	}
	addOperationToHistory(operationValue, result, solution = null) {
		$('.history').prepend(`<p class="history-element" data-operationValue="${operationValue}" data-result="${result}">Działanie: ${operationValue} Wynik: ${result} </p>`);
		this.clickable()
	}
	clickable() {
		$('.history-element').on('click', (element) => {
			const $operationInput = $('.operation');
			const $resultBox = $('.result');
			const $solutionBox = $('.solution');

			$resultBox.html(element.target.dataset.result);
			$operationInput.val(element.target.dataset.operationvalue);
			$solutionBox.html('');
		});
	}
}