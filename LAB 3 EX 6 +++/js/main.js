//TODO LAB 3
// 1. MIN/MAX
// 2. Arithmetic mean
// 3. Sort ->
// 4. Rotation -> for k times
// 5. Add number
// 6. Delete numbers
// 7. Exercise requirement

console.log('test');

class Calculator {
  constructor() {
    this.temperatures = [];
  }

  addTemperature(temperaturesCount, tempValue) {
    if (this.temperatures.length < temperaturesCount) {
      this.temperatures.push(Number(tempValue));
    }
    console.log(this.temperatures);
    return this.temperatures;
  }

  randomizeTemp(temperaturesCount) {
    if (this.temperatures.length < temperaturesCount) {
      for (let i = this.temperatures.length; i < temperaturesCount; i++) {
        this.temperatures.push(Number(Math.floor(Math.random() * 26) - 10)) // -10 .. 15
      }
    }
    console.log(this.temperatures);
    return this.temperatures;
  }

  findMinMax() {
    let max = this.temperatures[0];
    let min = this.temperatures[0];
    for (let i = 1; i < this.temperatures.length; i++) {
      if (this.temperatures[i] > max) {
        max = this.temperatures[i];
      }
      if (this.temperatures[i] < min) {
        min = this.temperatures[i];
      }
    }
    console.log(`This is min ${min}\nThis is max ${max}`);
    return {min, max}
  }

  calculateAverage() {
    if (this.temperatures.length !== 0) {
      let sum = 0;
      for (let i = 0; i < this.temperatures.length; i++) {
        sum += this.temperatures[i];
      }
      console.log((sum / this.temperatures.length).toFixed(2));
      return (sum / this.temperatures.length).toFixed(2);
    }
  }

  mergeSort(unsortedTemperatures) {
    if (unsortedTemperatures.length <= 1) {
      return (unsortedTemperatures)
    }
    const middle = Math.floor(unsortedTemperatures.length / 2);
    const left = unsortedTemperatures.slice(0, middle);
    const right = unsortedTemperatures.slice(middle);
    return this.merge(this.mergeSort(left), this.mergeSort(right))
  }

  merge(left, right) {
    if(document.getElementById('sortAscending').checked === true ||
      document.getElementById('sortDescending').checked === true) {
      let sortedTemperatures = [];
      while (left.length && right.length) {
        if (document.getElementById('sortAscending').checked === true) {
          if (left[0] <= right[0]) {
            sortedTemperatures.push(left.shift());
          } else {
            sortedTemperatures.push(right.shift())
          }
        } else {
          if (left[0] >= right[0]) {
            sortedTemperatures.push(left.shift());
          } else {
            sortedTemperatures.push(right.shift())
          }
        }
      }
      console.log(sortedTemperatures);
      return sortedTemperatures.concat(left, right);
    }
  }


  rotateArray(rotationCount) {
    if (document.getElementById('rotationLeft').checked === true ||
      document.getElementById('rotationRight').checked === true) {
      for (let i = 0; i < rotationCount; i++) {
        if (document.getElementById('rotationLeft').checked === true) {
          this.temperatures.unshift(this.temperatures[this.temperatures.length-1]);
          this.temperatures.splice(this.temperatures.length-1, 1);
        } else if (document.getElementById('rotationRight').checked === true) {
          this.temperatures.push(this.temperatures[0]);
          this.temperatures.splice(0,1);
        }
      }
      console.log(this.temperatures);
      return  this.temperatures;
    } else {
      console.log(`No rotation method chosen`);
      return (`No rotation direction method chosen`)
    }
  }

  addElement(value) {
    this.temperatures.push(value);
    console.log(this.temperatures);
  }

  removeElement(position) {
    this.temperatures.splice(position - 1, 1);
    console.log(this.temperatures);
  }
  showResults(where, result) {
    document.getElementById(`${where}`).innerHTML = `${result}`;
  }

}

document.addEventListener("DOMContentLoaded", () => {
  const calculator = new Calculator();
  document.getElementById('addValueBut').addEventListener('click', () => {
    calculator.addTemperature(document.getElementById('temperaturesCount').value, document.getElementById('tempValue').value);
    calculator.showResults(
      `createdArray`,
      `The created array is ${calculator.temperatures}`
    );
  });
  document.getElementById('randomizeBut').addEventListener('click', () => {
    calculator.randomizeTemp(document.getElementById('temperaturesCount').value);
    calculator.showResults(
      `createdArray`,
      `The created array is ${calculator.temperatures}`
    );
  });
  document.getElementById('minMaxBut').addEventListener('click', () => {
    calculator.findMinMax();
    calculator.showResults(
      `min`,
      `The min value is ${calculator.findMinMax().min}`
    );
    calculator.showResults(
      'max',
      `The max value is ${calculator.findMinMax().max}`
    );
  });
  document.getElementById('averageBut').addEventListener('click', () => {
    calculator.calculateAverage();
    calculator.showResults(
      `average`,
      `The average value is ${calculator.calculateAverage()}`
    );
  });
  document.getElementById('sortBut').addEventListener('click', () => {
    calculator.mergeSort(calculator.temperatures);
    calculator.showResults(
      `sortedArray`,
      `The sorted array is ${calculator.mergeSort(calculator.temperatures)}`
    );
  });
  document.getElementById('rotationBut').addEventListener('click', () => {
    calculator.rotateArray(document.getElementById('rotationCount').value);
    calculator.showResults(
      `rotatedArray`,
      `The array after rotation ${calculator.rotateArray(document.getElementById('rotationCount').value)}`
    );
  });
  document.getElementById('addElementBut').addEventListener('click', () => {
    calculator.addElement(document.getElementById('valueToAdd').value);
    calculator.showResults(
      `arrayWithAddedElement`,
      `The array after adding element ${calculator.temperatures}`
    );
  });
  document.getElementById('removeElementBut').addEventListener('click', () => {
    calculator.removeElement(document.getElementById('elementPosition').value);
    calculator.showResults(
      `arrayWithoutElement`,
      `The array after removing element ${calculator.temperatures}`
    )
  });
});