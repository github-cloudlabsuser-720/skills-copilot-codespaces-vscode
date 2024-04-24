// Calculator class
class Calculator {
    constructor() {
        this.result = 0;
    }

    add(num) {
        this.result += num;
    }

    subtract(num) {
        this.result -= num;
    }

    multiply(num) {
        this.result *= num;
    }

    divide(num) {
        if (num !== 0) {
            this.result /= num;
        } else {
            console.log("Error: Cannot divide by zero");
        }
    }

    clear() {
        this.result = 0;
    }

    getResult() {
        return this.result;
    }
}

// Usage example
const calculator = new Calculator();
calculator.add(5);
calculator.subtract(2);
calculator.multiply(3);
calculator.divide(4);
console.log("Result:", calculator.getResult());

// FILEPATH: /workspaces/skills-copilot-codespaces-vscode/test.test.js
const Calculator = require('./test');

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test('initial value is 0', () => {
        expect(calculator.result).toBe(0);
    });

    test('add method adds a number to the result', () => {
        calculator.add(5);
        expect(calculator.result).toBe(5);
    });

    test('add method can be called multiple times', () => {
        calculator.add(5);
        calculator.add(3);
        expect(calculator.result).toBe(8);
    });
});
