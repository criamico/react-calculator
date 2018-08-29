let calculator = {
  applyOperation: function(a, b, op) {
    if (!a || !b || Number.isNaN(a) || Number.isNaN(b))
      return '';
    const operations = {
      '+': a + b,
      '-': a - b,
      '*': a * b,
      '/': a / b
    };

    return operations[op];
  },

  calcExpression: function(operands, operators) {
    if (operands.length <= 1 || operators.length === 0)
      return '';

    return operands.reduce((prev, curr, i) =>
      this.applyOperation(prev, curr, operators[i - 1])
    );
  },

  getExpression: function(str) {
    if (!str) return;
    const strOperands = str.match(/(\d+\.\d+|\d+)/g);
    const operators = str.match(/[*/+-]/g);
    if (!strOperands || !operators)
      return;
    const newOperators = (strOperands.length <= operators.length) ?
      operators[operators.length - 1] :
      operators;

    const operands = strOperands.map(parseFloat);
    const result = this.calcExpression(operands, newOperators);
    return result;
  }
};

module.exports = calculator;
