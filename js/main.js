//TODO list
// 1. Reflection

class Bus {
  constructor(bus) {
    this.position = {
      x: 0,
      y: 0
    };
    this.bus = bus
  }

  setPosition() {
    this.bus.setAttribute('style', 'transform: translate(' + this.position.x + 'px,' + this.position.y + 'px)')
  }

  MoveUp(i) {
    setTimeout(() => {
      this.position.y -= 100;
      this.setPosition();
    },i * 1000);
  }

  MoveDown(i) {
    setTimeout(() => {
      this.position.y += 100;
      this.setPosition()
    },i * 1000)


  }

  MoveRight(i) {
    setTimeout( () => {
      this.position.x += 100;
      this.setPosition();
    },i * 1000)

  }

  MoveLeft(i) {
    setTimeout( () => {
      this.position.x -= 100;
      this.setPosition();
    },i * 1000)

  }
}

document.getElementById('startBusBut').addEventListener('click',function () {
  startGame();
});

const startGame = () => {
  const bus = new Bus(document.getElementById("bus"));
  //const route = [
  bus.MoveLeft(1);
  bus.MoveUp(2);
  bus.MoveRight(3);
  bus.MoveRight(4);
  bus.MoveUp(5);
  bus.MoveUp(6);
  bus.MoveLeft(7);
  bus.MoveLeft(8);
  bus.MoveDown(9);
  bus.MoveDown(10);
  bus.MoveDown(11);
  bus.MoveDown(12);
  bus.MoveDown(13);
  bus.MoveDown(14);
  bus.MoveRight(15);
  bus.MoveRight(16);
  bus.MoveRight(17)
//  ];
};









