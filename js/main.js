class Bus {
    constructor() {
        this.bus = {
            x: 0, y: 0
        }
    }

    getXY() {
        return this.bus
    }

    up() {
        this.bus.y -= 100;
    }

    down() {
        this.bus.y += 100;
    }

    right() {
        this.bus.x += 100;
    }

    left() {
        this.bus.x -= 100;
    }
}

const bus = new Bus();
const div = document.getElementById("bus");

const altaFunctie = () => {
    div.setAttribute('style', 'transform: translate(' + bus.getXY().x + 'px,' + bus.getXY().y + 'px)');
}
setTimeout(() => {
    bus.up();
    altaFunctie();
}, 500);
setTimeout(() => {
    bus.right();
    altaFunctie();
}, 1000);
setTimeout(() => {
    bus.right();
    altaFunctie();
}, 1500);
setTimeout(() => {
    bus.up();
    altaFunctie();
}, 2000);
setTimeout(() => {
    bus.up();
    altaFunctie();
}, 2500);
setTimeout(() => {
    bus.left();
    altaFunctie();
}, 2500);
setTimeout(() => {
    bus.left();
    altaFunctie();
}, 3000);
setTimeout(() => {
    bus.down();
    altaFunctie();
}, 3500);
setTimeout(() => {
    bus.down();
    altaFunctie();
}, 4000);
setTimeout(() => {
    bus.down();
    altaFunctie();
}, 4500);
setTimeout(() => {
    bus.down();
    altaFunctie();
}, 5000);
setTimeout(() => {
    bus.down();
    altaFunctie();
}, 5500);
setTimeout(() => {
    bus.down();
    altaFunctie();
}, 6000);
setTimeout(() => {
    bus.right();
    altaFunctie();
}, 6500);
setTimeout(() => {
    bus.right();
    altaFunctie();
    console.log('you have arrived')
}, 7000);

