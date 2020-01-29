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

  addTemperature(tempArrayLength, tempValue) {
    if (this.temperatures.length < tempArrayLength) {
      this.temperatures.push(Number(tempValue));
    } else {
      alert('Max length')
    }
    console.log(this.temperatures);
    return this.temperatures.join(' ');
  }

  randomizeTemp(tempArrayLength) {
    if (this.temperatures.length < tempArrayLength) {
      for (let i = this.temperatures.length; i < tempArrayLength; i++) {
        this.temperatures.push(Number(Math.floor(Math.random() * 26) - 10)) // -10 .. 15
      }
    } else {
      alert('Max length')
    }
    console.log(this.temperatures);
    return this.temperatures.join(' ');
  }

  findMinMax() {
    // let max = this.temperatures.reduce((x,y) => {return (x > y) ? x : y});
    // let min = this.temperatures.reduce((x,y) => {return (x < y) ? x : y});
    let max = this.temperatures[0];
    let min = this.temperatures[0];
    this.temperatures.forEach(value => {
      if (value > max) {
        max = value
      }
      if (value < min) {
        min = value
      }
    });
    console.log(`This is min ${min}\nThis is max ${max}`);
    return [min, max]
  }

  findArithmeticMean() {
    let sum = this.temperatures.reduce((x,y) => {return (x + y)} );
    console.log(Math.round(sum/this.temperatures.length));
    return Math.round(sum/this.temperatures.length);
  }

  arraySort() {
    if (document.getElementById('sortAscendant').checked === true) {
      console.log('Ascending ' + this.temperatures.sort((x,y) => {return (x - y)}));
      return this.temperatures.sort((x,y) => {return (x - y)});
    } else if (document.getElementById('sortDescendent').checked === true) {
      console.log('Descendent ' + this.temperatures.sort((x, y) => {return (y - x)}));
      return this.temperatures.sort((x,y) => {return (y - x)});
    } else {
      alert('Choose sorting method')
    }
  }

  rotateArray(rotationCount) {
    if (document.getElementById('rotationLeft').checked === true) {
      for (let i = 0; i < rotationCount; i++) {
        this.temperatures.unshift(this.temperatures[this.temperatures.length-1]);
        this.temperatures.splice(this.temperatures.length-1, 1);
      }
      console.log(this.temperatures);
      return this.temperatures
    }
    if (document.getElementById('rotationRight').checked === true) {
      for (let i = 0; i < rotationCount;i++) {
        this.temperatures.push(this.temperatures[0]);
        this.temperatures.splice(0,1);
      }
      console.log(this.temperatures);
      return this.temperatures;
    }
  }

  addElement(value) {
    this.temperatures.push(value);
    console.log(this.temperatures);
    return this.temperatures;
  }

  removeElement(position) {
    this.temperatures.splice(position-1,1);
    console.log(this.temperatures);
    return this.temperatures;
  }

}

document.addEventListener("DOMContentLoaded", () => {
  const calculator = new Calculator();
  document.getElementById('addValueBut').addEventListener('click', () => {
    calculator.addTemperature(document.getElementById('tempArrayLength').value, document.getElementById('tempValue').value);
  });
  document.getElementById('randomizeBut').addEventListener('click', () => {
    calculator.randomizeTemp(document.getElementById('tempArrayLength').value);
  });
  document.getElementById('minMaxBut').addEventListener('click', () => {
    calculator.findMinMax();
  });
  document.getElementById('arithmeticMeanBut').addEventListener('click', () => {
    calculator.findArithmeticMean();
  });
  document.getElementById('sortBut').addEventListener('click', () => {
    calculator.arraySort();
  });
  document.getElementById('rotationBut').addEventListener('click', () => {
    calculator.rotateArray(document.getElementById('rotationCount').value)
  });
  document.getElementById('addElementBut').addEventListener('click', () => {
    calculator.addElement(document.getElementById('valueToAdd').value);
  });
  document.getElementById('removeElementBut').addEventListener('click', () => {
    calculator.removeElement(document.getElementById('elementPosition').value)
  });
});