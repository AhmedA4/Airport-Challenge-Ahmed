// Imports:
import Plane from './plane.js';
import Airport from './airport.js';

// Declare a new airport instance with a capacity of 2 and no planes present

let airport = new Airport(2);

// Declare new plane instances

let plane1 = new Plane("Plane 1");
let plane2 = new Plane("Plane 2");
let plane3 = new Plane("Plane 3");
let plane4 = new Plane("Plane 4");
let plane5 = new Plane("Plane 5");

console.log(airport);

// Modify the airport's capacity to the string 'Two'

airport.setCapacity('Two');
console.log(airport); // Capacity is still 2 as the capacity can only be assigned a number

// Modify the airport's capacity to 4

airport.setCapacity(4);
console.log(airport); // Capacity is now 4

// Instruct plane1 to land at the airport

airport.instructToLand(plane1);
console.log(airport); // Plane 1 is added to the planes array

// Instruct plane2, plane3 and plane4 to land at the airport

airport.instructToLand(plane2);
airport.instructToLand(plane3);
airport.instructToLand(plane4);
console.log(airport); // All planes added to the planes array

// Attempt to instruct plane4 to land at the airport again

airport.instructToLand(plane4);
console.log(airport); // Plane 4 is not added to the planes array because it is already present

// Instruct plane5 to land at the airport

airport.instructToLand(plane5);
console.log(airport); // Plane 5 is not added to the planes array because the airport is at full capacity

// Instruct plane1 to take off from the airport

airport.takeOff(plane1);
console.log(airport); // Plane 1 is removed from the planes array

// Attempt to instruct plane1 to take off from the airport again

airport.takeOff(plane1);
console.log(airport); // Plane 1 can't be removed as it is not present in the planes array

// Attempt to instruct a plane to land at the airport when the weather is stormy

airport.setWeather('stormy');
airport.instructToLand(plane5);
console.log(airport); // Plane 5 is not added to the planes array because the weather is stormy, even though there is enough capacity

// Attempt to instruct a plane to take off from the airport when the weather is stormy

airport.takeOff(plane2);
console.log(airport); // Plane 2 is not removed from the planes array because the weather is stormy