class Bus {
    constructor() {
        this.bus = {
            x: 0, y: 0
        }
    }
    getXY() {
        return this.bus
    }
    up(){
        this.bus.x += 100;
        this.bus.y += 15;
    }
    top() {
        this.bus.x += 25;
    }
    right() {
        this.bus.x += 36;
        this.bus.y += 68;
    }
}

const bus = new Bus();
const div = document.getElementById("bus");
div.setAttribute("style", "transform: Translate(" + bus.getXY().x +"px," + bus.getXY().y + 'px)');
    setTimeout(() => {
        bus.up();
        div.setAttribute("style", "transform: Translate(" + bus.getXY().x +"px," + bus.getXY().y + 'px)');
    }, 500);
    setTimeout(() => {
        bus.right();
        div.setAttribute("style", "transform: Translate(" + bus.getXY().x +"px," + bus.getXY().y + 'px)');
    }, 1000);



