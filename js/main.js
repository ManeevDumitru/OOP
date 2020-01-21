class Bus {

    startEngine() {
        console.log('Bus Engine started')
    }

    depositLeave() {
        console.log('Bus left deposit');
    }

    turnRight() {
        console.log('Bus Turn right');
    }

    turnLeft(){
        console.log("Bus turn left")
    }

    goForward(meters) {
        console.log(`Bus goes forward ${meters} meters`)
    }

    arriveAtStation(station) {
        console.log(`<- Bus arrives at ${station} station`);
        console.log("Bus opens doors")
    }

    leavesStation() {
        console.log("Bus closes doors");
        console.log("-> Bus leaves stations");
    }

    passengerTransit(loadCount, unloadCount) {
        console.log(`Bus unloads ${loadCount} passengers`);
        console.log(`Bus loads ${unloadCount} passengers`);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("startBusBut").addEventListener("click", () => {
        const bus = new Bus();
        bus.startEngine();
        bus.depositLeave();
        bus.turnRight();
        bus.goForward(100);
        bus.arriveAtStation("Police Department");
        bus.passengerTransit(Math.floor(Math.random()*15), Math.floor(Math.random()*15));
        bus.leavesStation();
        bus.goForward(200);
        bus.arriveAtStation('Guliver');
        bus.passengerTransit(Math.floor(Math.random()*15), Math.floor(Math.random()*15));
        bus.leavesStation();
        bus.goForward(50);
        bus.turnLeft();
        bus.goForward(150);
        bus.arriveAtStation('Dacia');
        bus.passengerTransit(Math.floor(Math.random()*15), Math.floor(Math.random()*15));
        bus.leavesStation();
        bus.goForward(100);
        bus.turnLeft();
        bus.goForward(200);
        bus.arriveAtStation('MeraxSoft');
        bus.passengerTransit(Math.floor(Math.random()*15), Math.floor(Math.random()*15));
        bus.leavesStation();
        bus.goForward(200);
        bus.arriveAtStation('Slavena');
        bus.passengerTransit(Math.floor(Math.random()*15), Math.floor(Math.random()*15));
        bus.leavesStation();
        bus.goForward(25);
        bus.turnLeft();
        bus.goForward(200);
        bus.arriveAtStation('Spital firoviar');
        bus.passengerTransit(Math.floor(Math.random()*15), Math.floor(Math.random()*15));
        bus.leavesStation();
        bus.goForward(250);
        bus.arriveAtStation('Spital');
        bus.passengerTransit(Math.floor(Math.random()*15), Math.floor(Math.random()*15));
        bus.leavesStation();
        bus.goForward(500);
        bus.arriveAtStation('Cemetery');
        bus.passengerTransit(Math.floor(Math.random()*15), Math.floor(Math.random()*15));
        bus.leavesStation();
        bus.goForward(300);
        bus.arriveAtStation('Steluta');
        bus.passengerTransit(Math.floor(Math.random()*15), Math.floor(Math.random()*15));
        bus.leavesStation();
        bus.goForward(500);
        bus.arriveAtStation('Nikolaeva');
        bus.passengerTransit(Math.floor(Math.random()*15), Math.floor(Math.random()*15));
        bus.leavesStation();
        bus.goForward(300);
        bus.arriveAtStation('Uzina Raut');
        bus.passengerTransit(Math.floor(Math.random()*15), Math.floor(Math.random()*15));
        bus.leavesStation();
        bus.goForward(50);
        bus.turnLeft();
        bus.goForward(200);
        bus.arriveAtStation('Center');
        bus.passengerTransit(Math.floor(Math.random()*15), Math.floor(Math.random()*15));
        bus.leavesStation();
    });
});