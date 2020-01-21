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
        console.log(`<- Bus arrives at ${station} station`)
    }

    openDoors() {
        console.log("Bus opens doors")
    }

    unloadPassengers(count) {
        console.log(`Bus unloads ${count} passengers`)
    }

    loadPassengers(count) {
        console.log(`Bus loads ${count} passengers`)
    }

    closeDoors() {
        console.log("Bus closes doors")
    }

    leavesStation() {
        console.log("-> Bus leaves stations")
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
        bus.openDoors();
        bus.unloadPassengers(Math.floor(Math.random()*15));
        bus.loadPassengers(Math.floor(Math.random()*15));
        bus.closeDoors();
        bus.leavesStation();
        bus.goForward(200);
        bus.arriveAtStation('Guliver');
        bus.openDoors();
        bus.unloadPassengers(Math.floor(Math.random()*15));
        bus.loadPassengers(Math.floor(Math.random()*15));
        bus.closeDoors();
        bus.leavesStation();
        bus.goForward(50);
        bus.turnLeft();
        bus.goForward(150);
        bus.arriveAtStation('Dacia');
        bus.openDoors();
        bus.unloadPassengers(Math.floor(Math.random()*15));
        bus.loadPassengers(Math.floor(Math.random()*15));
        bus.closeDoors();
        bus.leavesStation();
        bus.goForward(100);
        bus.turnLeft();
        bus.goForward(200);
        bus.arriveAtStation('MeraxSoft');
        bus.openDoors();
        bus.unloadPassengers(Math.floor(Math.random()*15));
        bus.loadPassengers(Math.floor(Math.random()*15));
        bus.closeDoors();
        bus.leavesStation();
        bus.goForward(200);
        bus.arriveAtStation('Slavena');
        bus.openDoors();
        bus.unloadPassengers(Math.floor(Math.random()*15));
        bus.loadPassengers(Math.floor(Math.random()*15));
        bus.closeDoors();
        bus.leavesStation();
        bus.goForward(25);
        bus.turnLeft();
        bus.goForward(200);
        bus.arriveAtStation('Spital firoviar');
        bus.openDoors();
        bus.unloadPassengers(Math.floor(Math.random()*15));
        bus.loadPassengers(Math.floor(Math.random()*15));
        bus.closeDoors();
        bus.leavesStation();
        bus.goForward(250);
        bus.arriveAtStation('Spital');
        bus.openDoors();
        bus.unloadPassengers(Math.floor(Math.random()*15));
        bus.loadPassengers(Math.floor(Math.random()*15));
        bus.closeDoors();
        bus.leavesStation();
        bus.goForward(500);
        bus.arriveAtStation('Cemetary');
        bus.openDoors();
        bus.unloadPassengers(Math.floor(Math.random()*15));
        bus.loadPassengers(Math.floor(Math.random()*15));
        bus.closeDoors();
        bus.leavesStation();
        bus.goForward(300);
        bus.arriveAtStation('Steluta');
        bus.openDoors();
        bus.unloadPassengers(Math.floor(Math.random()*15));
        bus.loadPassengers(Math.floor(Math.random()*15));
        bus.closeDoors();
        bus.leavesStation();
        bus.goForward(500);
        bus.arriveAtStation('Nikolaeva');
        bus.openDoors();
        bus.unloadPassengers(Math.floor(Math.random()*15));
        bus.loadPassengers(Math.floor(Math.random()*15));
        bus.closeDoors();
        bus.leavesStation();
        bus.goForward(300);
        bus.arriveAtStation('Uzina Raut');
        bus.openDoors();
        bus.unloadPassengers(Math.floor(Math.random()*15));
        bus.loadPassengers(Math.floor(Math.random()*15));
        bus.closeDoors();
        bus.leavesStation();
        bus.goForward(50);
        bus.turnLeft();
        bus.goForward(200);
        bus.arriveAtStation('Center');
        bus.openDoors();
        bus.unloadPassengers(Math.floor(Math.random()*15));
        bus.loadPassengers(Math.floor(Math.random()*15));
        bus.closeDoors();
        bus.leavesStation();
    });
});