//TODO marks
// 1. Min/Max
// 2. Difference
// 3. Arithmetic Mean
// 4. Amount of marks above or bellow of given mark
// 5. Exercise requirement

class Calculator {
  constructor() {
    this.marks = [];
  }

  addMarks(studentsAmount, mark) {
    if (this.marks.length < studentsAmount && mark > 0 && mark < 11) {
      this.marks.push(Number(mark));
    }
  }

  calculations() {
    if (this.marks.length !== 0) {
      let min = this.marks[0];
      let max = this.marks[0];
      let quality = 0;
      let performance = 0;
      let average = 0;
      for (let i = 1; i < this.marks.length; i++) {
        if (this.marks[i] > max) {
          max = this.marks[i];
        }
        if (this.marks[i] < min) {
          min = this.marks[i];
        }
      }
      let gap = max - min;
      for (let i = 0; i < this.marks.length; i++) {
        if (this.marks[i] >= 5) {
          performance++;
          if (this.marks[i] >= 9) {
            quality++;
          }
        }
        average += this.marks[i];
      }
      return {
        marks: this.marks,
        min,
        max,
        gap,
        quality: Math.round(quality * 100 / this.marks.length),
        performance: Math.round(performance * 100 / this.marks.length),
        average: (average / this.marks.length).toFixed(2)
      }
    } else {
      document.getElementById('marks').innerHTML = `No marks to work with`;
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const calculations = new Calculator();
  document.getElementById('startCalcBut').addEventListener('click', () => {
    calculations.addMarks(document.getElementById('students').value, document.getElementById('mark').value);
    document.getElementById('marks').innerHTML = `The array is ${calculations.calculations().marks}`;
    document.getElementById('min').innerHTML = `Smallest mark is ${calculations.calculations().min}`;
    document.getElementById('max').innerHTML = `The biggest mark is ${calculations.calculations().max}`;
    document.getElementById('difference').innerHTML = `The difference between min and max is ${calculations.calculations().gap}`;
    document.getElementById('quality').innerHTML = `The overall quality is ${calculations.calculations().quality}%`;
    document.getElementById('performance').innerHTML = `The performance is ${calculations.calculations().performance}%`;
    document.getElementById('average').innerHTML = `The average is ${calculations.calculations().average}`;
  })
});