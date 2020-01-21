//TODO list
// 1. Reflection

class Bus {
    constructor(bus) {
        this.position = {
            x: 0,
            y: 0
        }
        this.bus = bus
    }

    setPosition () {
    this.bus.setAttribute('style', 'transform: translate(' + this.position.x + 'px,' +  this.position.y + 'px)');
    }

    move (direction) {
        //
    }


    up() {
        this.position.y -= 100;
    }

    down() {
        this.position.y += 100;
    }

    right() {
        this.position.x += 100;
    }

    left() {
        this.position.x -= 100;
    }
}

const bus = new Bus(document.getElementById("bus"));
// const route = [
//     bus.move(''),
//     bus.move(''),
//     bus.move(''),
//     bus.move(''),
//     bus.move(''),
// ]


