//TODO cycle
// 1. Exercise requirement
// 2. All valid numbers
// 3. First n numbers
// 4. Numbers from given interval ( by user )
// 5. Biggest number

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
    return this.numbers.join(' ');
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

  checkArrayNumberParity() {
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
    return this.firstNumbers.join(' ');
  }

  writeNumbersFromInterval(bottomLine, topLine) {
    this.numbers.forEach(number => {
      if (this.checkParity(number) === true && bottomLine < number && number < topLine) {
        this.intervalNumbers.push(number)
      }
    });
    console.log(this.intervalNumbers);
    return this.intervalNumbers.join(' ');
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

  showResult() {
    document.getElementById('createdArray').innerHTML = `The created array is ${this.randomiseNumber()}`
    document.getElementById('parityResult').innerHTML = `The given number is even? - ${this.checkParity().toString()}`;
    document.getElementById('firstNumbersResult').innerHTML = `The first numbers of the array are ${this.firstNNumbers()}`;
    document.getElementById('intervalResult').innerHTML = `Numbers from given interval are ${this.writeNumbersFromInterval()}`;
    document.getElementById('biggestResult').innerHTML = `The biggest number is ${this.biggestNumber()}`
  }
}

document.getElementById('parityBut').addEventListener('click', () => {
  const calculator = new Calculator();
  calculator.checkParity(document.getElementById('parityNumber').value);
  calculator.randomiseNumber(document.getElementById('arrayLength').value);
  calculator.checkArrayNumberParity();
  calculator.firstNNumbers(document.getElementById('numberN').value);
  calculator.writeNumbersFromInterval(document.getElementById('bottomLine').value,document.getElementById('topLine').value);
  calculator.biggestNumber();
  calculator.showResult();
});