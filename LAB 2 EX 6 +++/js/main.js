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
    return this.numbers;
  }

  checkParity(number) {
     return number % 2 === 0
  }

  arrayNumberParity() {
    for (let i = 0; i < this.numbers.length; i++) {
      if (this.checkParity(this.numbers[i])) {
        this.numbersAux.push(this.numbers[i]);
      }
    }
  }

  firstNNumbers(number) {
    for (let i = 0; i < number; i++) {
      this.firstNumbers.push(this.numbers[i]);
    }
    return this.firstNumbers;
  }

  numbersFromInterval(intervalStart, intervalEnd) {
    for (let i = 0; i < this.numbers.length; i++) {
      if (this.numbers[i] > intervalStart && this.numbers[i] < intervalEnd) {
        this.intervalNumbers.push(this.numbers[i])
      }
    }
    if (this.intervalNumbers.length !== 0) {
      return this.intervalNumbers;
    } else {
      return (`no numbers from given interval`)
    }
  }

  biggestNumber() {
    let max = this.numbers[0];
    for (let i = 1; i < this.numbers.length; i++) {
      if (this.numbers[i] > max) {
        max = this.numbers[i];
      }
    }
    return max;
  }

  showResult() {
    document.getElementById('createdArray').innerHTML = `The created array is ${this.randomiseNumber()}`;
    document.getElementById('parityResult').innerHTML = `The given number is even? - ${this.checkParity().toString()}`;
    document.getElementById('firstNumbersResult').innerHTML = `The first numbers of the array are ${this.firstNNumbers()}`;
    document.getElementById('intervalResult').innerHTML = `Numbers from given interval are ${this.numbersFromInterval()}`;
    document.getElementById('biggestResult').innerHTML = `The biggest number is ${this.biggestNumber()}`
  }
}

document.getElementById('startCalculationsBut').addEventListener('click', () => {
  const calculator = new Calculator();
  calculator.checkParity(document.getElementById('parityNumber').value);
  calculator.randomiseNumber(document.getElementById('arrayLength').value);
  calculator.arrayNumberParity();
  calculator.firstNNumbers(document.getElementById('numberN').value);
  calculator.numbersFromInterval(
    document.getElementById('intervalStart').value,
    document.getElementById('intervalEnd').value
  );
  calculator.biggestNumber();
  calculator.showResult();
});