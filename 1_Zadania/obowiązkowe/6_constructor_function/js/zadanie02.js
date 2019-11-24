let Calculator = function() {
    this.history = [];
}

Calculator.prototype.add = function(num1, num2) {
    var result = num1+num2;
    this.history.push(`added ${num1} to ${num2} got ${result}`)
    return result;
}

Calculator.prototype.multiply = function(num1, num2) {
    var result = num1*num2;
    this.history.push(`multipled ${num1} to ${num2} got ${result}`)
    return result;
}

Calculator.prototype.substract = function(num1, num2) {
    var result = num1-num2;
    this.history.push(`substracted ${num1} to ${num2} got ${result}`)
    return result;
}

Calculator.prototype.divide = function(num1, num2) {
    var result = num1/num2;
    this.history.push(`divided ${num1} to ${num2} got ${result}`)
    return result;
}

Calculator.prototype.printOperations = function() {
console.table(this.history);
}

Calculator.prototype.clearOperations = function() {
this.history = [];
}

var Calculator1 = new Calculator();
Calculator1.add(1,1);
Calculator1.multiply(1,2);
Calculator1.substract(2,1);
Calculator1.divide(10,2);
Calculator1.printOperations();
Calculator1.clearOperations();
Calculator1.printOperations();
