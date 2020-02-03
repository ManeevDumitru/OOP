//TODO temperatures
// 1. Min and Max +++
// 2. Change lines +++
// 3. Add line
// 4. Build the given table 3x3:
// (1 6 7)
// (2 5 8)
// (3 4 9)

console.log('works');

class Calculator {
  constructor() {
    this.temperatures = [];
  }

  createTable(n, m) {
    for (let i = 0; i < n; i++) {
      this.temperatures[i] = [];
      for (let j = 0; j < m; j++) {
        this.temperatures[i][j] = Math.floor(Math.random() * 23) - 7;
      }
    }
    console.log(this.temperatures);
    return (this.temperatures);
  }

  minMax(n, m) {
    let min = this.temperatures[0][0];
    let max = this.temperatures[0][0];
    let positionMinI = 0;
    let positionMinJ = 0;
    let positionMaxI = 0;
    let positionMaxJ = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (this.temperatures[i][j] <= min) {
          min = this.temperatures[i][j];
          positionMinI = i;
          positionMinJ = j;
        }
        if (this.temperatures[i][j] >= max) {
          max = this.temperatures[i][j];
          positionMaxI = i;
          positionMaxJ = j;
        }
      }
    }
    console.log(`This is min ${min}\nThis is max ${max}`);
    return {
      min,
      positionMinI,
      positionMinJ,
      max,
      positionMaxI,
      positionMaxJ
    }
  }

  lowTemperatures(n, m) {
    let sum = 0;
    let lowTemperature = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        sum += this.temperatures[i][j];
      }
    }
    Math.round(sum /= (n * m));
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (this.temperatures[i][j] < sum) {
          lowTemperature++;
        }
      }
    }
    console.log(`This is the average temperature ${sum}
    \nThis is the amount of days with low temperatures ${lowTemperature}`);
    return lowTemperature;
  }

  changeRows(n, m) {
    let aux;
    aux = this.temperatures[n];
    this.temperatures[n] = this.temperatures[m];
    this.temperatures[m] = aux;
    console.log(this.temperatures);
  }

  addRow(n, m) {
    let aux = [];
    for (let i = 0; i < m; i++) {
      aux[i] = Number(this.lowTemperatures(n, m));
    }
    this.temperatures[this.temperatures.length] = aux;
    console.log(this.temperatures);
  }

  taskTable() {
    let table = [];
    let value = 1;
    for (let i = 0; i < 3; i++) {
      table[i] = [];
      for (let j = 0; j < 3; j++) {
        table[i][j] = '';
      }
    }
    for (let i = 0; i < 3; i++) {
      table[i][0] = value++;
    }
    value += 3;
    for (let i = 0; i < 3; i++) {
      table[i][1] = --value;
    }
    value += 3;
    for (let i = 0; i < 3; i++) {
      table[i][2] = value++;
    }
    console.log(table);
    return table;
  }

  showArray(where) {
    for (let i = 0; i < this.temperatures.length; i++) {
      document.getElementById(`${where}`).innerHTML += `${this.temperatures[i]}<br>`;
    }
  }

  showTaskTable() {
    for (let i = 0; i < this.taskTable().length; i++) {
      document.getElementById('taskTable').innerHTML += `${this.taskTable()[i]}<br>`;
    }
  }
  showResult(where, result) {
    document.getElementById(`${where}`).innerHTML = `${result}`;
  }

  clearOutput (where) {
    document.getElementById(`${where}`).innerHTML = ``;
  }
}


document.addEventListener('DOMContentLoaded', () => {
  let calculations = new Calculator();
  document.getElementById('createArrayBut').addEventListener('click', () => {
    calculations.createTable(
      document.getElementById('n').value,
      document.getElementById('m').value
    );
    calculations.clearOutput(`createdArray`);
    calculations.showArray(`createdArray`);
  });
  document.getElementById('minMaxBut').addEventListener('click', () => {
    calculations.showResult(
      `min`,
      `${calculations.minMax(
        document.getElementById('n').value,
        document.getElementById('m').value).min}`
    );
    calculations.showResult(
      `max`,
      `${calculations.minMax(
        document.getElementById('n').value,
        document.getElementById('m').value).max}`
    );
  });
  document.getElementById('lowTemperaturesBut').addEventListener('click', () => {
    calculations.showResult(
      `lowTemperatures`,
      `${calculations.lowTemperatures(
        document.getElementById('n').value,
        document.getElementById('m').value)}`
    );
  });
  document.getElementById('changeLinesBut').addEventListener('click', () => {
    calculations.changeRows(
      document.getElementById('nLineToChange').value,
      document.getElementById('mLineToChange').value
    );
    calculations.clearOutput(`changedRowArray`);
    calculations.showArray(`changedRowArray`);
  });
  document.getElementById('addRowBut').addEventListener('click', () => {
    calculations.addRow(
      document.getElementById('n').value,
      document.getElementById('m').value
    );
    calculations.clearOutput(`addedRowArray`);
    calculations.showArray(`addedRowArray`);
  });
  document.getElementById('createTaskTable').addEventListener('click', () => {
    calculations.taskTable();
    calculations.clearOutput(`taskTable`);
    calculations.showTaskTable();
  });
});