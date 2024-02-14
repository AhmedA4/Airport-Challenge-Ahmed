// Airport class defined

export default class Airport {

    capacity;
    planes;
    weather;

    constructor(capacity, planes, weather) {
        this.capacity = capacity;
        this.planes = [];
        this.weather = weather;
    }

    getCapacity() {
        return this.capacity;
    }

    setCapacity(newCapacity) {
        if (typeof newCapacity !== 'number') return;
        return this.capacity = newCapacity;
    }

    setWeather(weather) {
        this.weather = weather;
    }

    instructToLand(plane) {
        if (this.planes.length >= this.capacity) return;
        if (this.planes.indexOf(plane) >= 0) return `${plane.id} already present at airport!`;
        if (this.weather === 'stormy') return;
        this.planes.push(plane);
        return this.planes;
    }

    getPlanes() {
        return this.planes;
    }

    takeOff(plane) {
        let indexOfPlane = this.planes.indexOf(plane);
        if (indexOfPlane === -1) return `${plane.id} not present at airport!`;
        if (this.weather === 'stormy') return;
        this.planes.splice(indexOfPlane, 1);
    }
}

 