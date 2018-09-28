class Calculator extends Computations {
  constructor() {
    super();
    this.watchCode();
  }
  watchCode()  {
    $('.operation').on('keyup', () => {
      const operationValue = $('.operation').val();
      this.calculateOperation(operationValue);
    });
  }
  calculateOperation(operationValue) {
    switch (true) {
      case /(\-[0-9]{1,9}\+[0-9]{1,9})|[0-9]{1,9}\+[0-9]{1,9}/.test(operationValue):
        this.calculateAddition(operationValue);
        break;
      case /(\-[0-9]{1,9}\-[0-9]{1,9})|([0-9]{1,9}\-[0-9]{1,9})/.test(operationValue):
        this.calculateSubtraction(operationValue);
        break;
      case /([0-9]{1,9}\*\-[0-9]{1,9})|(\-[0-9]{1,9}\*\-[0-9]{1,9})|(\-[0-9]{1,9}\*[0-9]{1,9})|([0-9]{1,9}\*[0-9]{1,9})/.test(operationValue):
        this.calculateMultiplication(operationValue);
        break;
      case /(\-[0-9]{1,9}\/[0-9]{1,9})|([0-9]{1,9}\/[0-9]{1,9})/.test(operationValue):
        this.calculateDivision(operationValue);
        break;
      case /([0-9]{1,9}[a-z|A-Z](\-|\+)[0-9]{1,9}\=[0-9]{1,9})|(\-[0-9]{1,9}[a-z|A-Z](\-|\+)[0-9]{1,9}\=[0-9]{1,9})/.test(operationValue):
        this.calculateEquation(operationValue);
        break;
    }
  }
  returnResult(result) {
    $('.result').html(result);
  }
  clearInput() {
    $('.operation').val('');
  }
}
