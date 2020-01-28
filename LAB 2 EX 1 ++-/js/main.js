//TODO cycle
// 1. Exercise requirement
// 2. All valid numbers
// 3. First n numbers
// 4. Numbers from given interval ( by user )
// 5. Biggest number

console.log('nibba');

class Calculator {
  constructor() {
    this.numbers = [];
    this.numbersAux = [];
    this.firstNumbers = [];
    this.intervalNumbers = [];
  }

  randomiseNumber(arrayLength) {
    for (let i = 0; this.numbers.length < arrayLength; i++){
      this.numbers.push(Number(Math.floor(Math.random() * 2001) + -1000)); // -1000 .. 1000
    }
    console.log(this.numbers);
    return this.numbers;
  }

  checkParity(number) {
    if (number % 2 === 0) {
      console.log('even');
      return true;
    } else {
      console.log('odd');
      return false;
    }
  }

  checkArrayNumber() {
    this.numbers.forEach(number => {
      if (this.checkParity(number) === true) {
        this.numbersAux.push(number);
      }
    });
    console.log(this.numbersAux);
    return this.numbersAux;
  }

  firstNNumbers(number) {
    for (let i = 0; i < number; i++) {
      this.firstNumbers.push(this.numbers[i]);
    }
    console.log(this.firstNumbers);
    return this.firstNumbers;
  }

  checkInterval(bottomLine, topLine) {
    this.numbers.forEach(number => {
      if (this.checkParity(number) === true && bottomLine < number && number < topLine) {
        this.intervalNumbers.push(number)
      }
    });
    console.log(this.intervalNumbers);
    return this.intervalNumbers;
  }

  biggestNumber() {
    let max = this.numbers[0];
    this.numbers.forEach(number => {
      if (number > max) {
        max = number
      }
    });
    console.log(max);
    return max;
  }
}

document.getElementById('parityBut').addEventListener('click', () => {
  const calculator = new Calculator();
  calculator.checkParity(document.getElementById('parityNumber').value);
  calculator.randomiseNumber(document.getElementById('arrayLength').value);
  calculator.checkArrayNumber();
  calculator.firstNNumbers(document.getElementById('numberN').value);
  calculator.checkInterval(
    document.getElementById('bottomLine').value,
    document.getElementById('topLine').value)
  calculator.biggestNumber();
});