//TODO marks
// 1. Min/Max
// 2. Difference
// 3. Arithmetic Mean
// 4. Amount of marks above or bellow of given mark
// 5. Exercise requirement

console.log('nibba');

class Calculator {
  constructor() {
    this.marks = [];
  }

  addMarks(students, mark) {
    if (this.marks.length < students && mark > 0 && mark < 11) {
      this.marks.push(Number(mark));
    }
    console.log(this.marks)
  }

  calculations() {  // 1
    let performance = 0;
    let quality = 0;
    let min = this.marks[0];
    let max = this.marks[0];
    let difference;
    let media = 0;
    this.marks.forEach(mark => {
      if (mark > max) { // max
        max = mark
      }
      if (mark < min) { // min
        min = mark
      }
      if (mark >= 5) {
        performance++
      }
      if (mark >= 9) {
        quality++
      }
      media += mark;
    });
    difference = max - min;
    console.log(`
        Minimum ${min},
        Maximum ${max},
        Difference ${difference},
        Quality ${Math.round(quality * 100 / this.marks.length)}%,
        Performance ${Math.round(performance * 100 / this.marks.length)}%,
        Arithmetic Mean ${Math.round(media / this.marks.length)}`);
    return [
      min,
      max,
      difference,
      Math.round(quality * 100 / this.marks.length),
      Math.round(performance * 100 / this.marks.length),
      Math.round(media / this.marks.length)
    ]
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const calculations = new Calculator();
  document.getElementById('startCalcBut').addEventListener('click', () => {
    calculations.addMarks(document.getElementById('students').value, document.getElementById('mark').value);
    const result = calculations.calculations();
    document.getElementById('min').innerHTML = `Smallest mark is ${result[0]}`;
    document.getElementById('max').innerHTML = `The biggest mark is ${result[1]}`;
    document.getElementById('difference').innerHTML = `The difference between min and max is ${result[2]}`;
    document.getElementById('quality').innerHTML = `The overall quality is ${result[3]}`;
    document.getElementById('performance').innerHTML = `The performance is ${result[4]}`;
    document.getElementById('arithmetic').innerHTML = `The average is ${result[5]}`;
  })
});