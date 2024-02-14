// All imports here
import Airport from "../src/airport.js";
import Plane from "../src/plane.js";
import Weather from "../src/weather.js";

// Test 1
let testName = 'Test 1 - getCapacity returns the capacity of the airport';

// Arrange
let airport = new Airport(1);
let expectedOutput = 1;
let actualOutput, testResult;

// Act
actualOutput = airport.getCapacity();

// Assert
testResult = expectedOutput === actualOutput;

// Report
console.log(`${testName}. Passes: ${testResult}; expected ${expectedOutput}, got ${actualOutput}`);

// Clean up
airport = undefined;
expectedOutput = undefined;
actualOutput = undefined;
testResult = undefined;

// Test 2
testName = 'Test 2 - the capacity property of the airport can be overridden using setCapacity';

// Arrange
airport = new Airport(1);
expectedOutput = 2;
actualOutput, testResult;

// Act
airport.setCapacity(2);
actualOutput = airport.capacity;

// Assert
testResult = actualOutput === expectedOutput;

// Report
console.log(`${testName}. Passes: ${testResult}; expected ${expectedOutput}, got ${actualOutput}`);

// Clean up
airport = undefined;
expectedOutput = undefined;
actualOutput = undefined;
testResult = undefined;

// Test 3
testName = 'Test 3 - the capacity of the airport can only be assigned a number';

// Arrange
airport = new Airport(1);
expectedOutput = 1;
actualOutput, testResult;

// Act
airport.setCapacity('Two');
actualOutput = airport.capacity;

// Assert
testResult = actualOutput === expectedOutput;

// Report
console.log(`${testName}. Passes: ${testResult}; expected ${expectedOutput}, got ${actualOutput}`);

// Clean up
airport = undefined;
expectedOutput = undefined;
actualOutput = undefined;
testResult = undefined;

// Test 4
testName = 'Test 4 - it should add a plane to the airport array if and when a plane is instructed to land';

// Arrange
airport = new Airport();
let plane = new Plane();
expectedOutput = 1;
actualOutput, testResult;

// Act
airport.instructToLand(plane);
actualOutput = airport.planes.length;

// Assert
testResult = expectedOutput === actualOutput;

// Report
console.log(`${testName}. Passes: ${testResult}; expected ${expectedOutput}, got ${actualOutput}`);

// Clean up
airport = undefined;
plane = undefined;
expectedOutput = undefined;
actualOutput = undefined;
testResult = undefined;

// Test 5
testName = 'Test 5 - should check that the correct plane is added to the planes array';

// Arrange
airport = new Airport();
plane = new Plane('plane1');
expectedOutput = plane;
actualOutput, testResult;

// Act
airport.instructToLand(plane);
actualOutput = airport.planes[0];

// Assert
testResult = expectedOutput === actualOutput;

// Report
console.log(`${testName}. Passes: ${testResult}; expected ${expectedOutput}, got ${actualOutput}`);

// Clean up
airport = undefined;
plane = undefined;
expectedOutput = undefined;
actualOutput = undefined;
testResult = undefined;

//Test 6
testName = 'Test 6 - plane should only be added to planes array (ie. allowed to land) only if airport is not full';

// Arrange
airport = new Airport(0);
plane = new Plane('plane1');
expectedOutput = 0;
actualOutput, testResult;

// Act
airport.instructToLand(plane);
actualOutput = airport.planes.length;

// Assert
testResult = actualOutput === expectedOutput;

// Report
console.log(`${testName}. Passes: ${testResult}; expected ${expectedOutput}, got ${actualOutput}`);

// Clean up
airport = undefined;
plane = undefined;
expectedOutput = undefined;
actualOutput = undefined;
testResult = undefined;

//Test 7
testName = 'Test 7 - plane should only be added to planes array (ie. allowed to land) if not already at the airport';

// Arrange
airport = new Airport();
plane = new Plane('plane1');
airport.planes = [plane];
expectedOutput = 1;
actualOutput, testResult;

// Act
airport.instructToLand(plane);
// console.log(airport.this.planes.indexOf(plane));
actualOutput = airport.planes.length;

// Assert
testResult = actualOutput === expectedOutput;

// Report
console.log(`${testName}. Passes: ${testResult}; expected ${expectedOutput}, got ${actualOutput}`);

// Clean up
airport = undefined;
plane = undefined;
expectedOutput = undefined;
actualOutput = undefined;
testResult = undefined;

// Test 8
testName = 'Test 8 - instructing a plane to take off reduces the number of planes present by one'

// Arrange 
airport = new Airport();
plane = new Plane();
airport.planes = [plane];
expectedOutput = 0;
actualOutput, testResult;

// Act
airport.takeOff(plane);
actualOutput = airport.planes.length;

// Assert
testResult = actualOutput === expectedOutput;

// Report
console.log(`${testName}. Passes: ${testResult}; expected ${expectedOutput}, got ${actualOutput}`);

// Clean up
airport = undefined;
plane = undefined;
expectedOutput = undefined;
actualOutput = undefined;
testResult = undefined;

// Test 9
testName = 'Test 9 - takeOff removes the correct plane from planes array when it takes off';

// Arrange
airport = new Airport();
plane = new Plane('plane1');
let plane2 = new Plane('plane2');
let plane3 = new Plane('plane3');
airport.planes = [plane, plane2, plane3];
expectedOutput = -1;
actualOutput, testResult;

// Act
airport.takeOff(plane);
actualOutput = airport.planes.indexOf(plane.id);

// Assert
testResult = actualOutput === expectedOutput;

// Report
console.log(`${testName}. Passes: ${testResult}; expected ${expectedOutput}, got ${actualOutput}`);

// Clean up
airport = undefined;
plane = undefined;
expectedOutput = undefined;
actualOutput = undefined;
testResult = undefined;

// Test 10
testName = 'Test 10 - ensuring only planes present at the airport may be instructed to take off';

// Arrange
airport = new Airport();
plane = new Plane('plane2');
airport.planes = ['plane1'];
expectedOutput = "plane2 not present at airport!";
actualOutput, testResult;

// Act
airport.takeOff(plane);
actualOutput = airport.takeOff(plane);

// Assert
testResult = actualOutput === expectedOutput;

// Report
console.log(`${testName}. Passes: ${testResult}; expected ${expectedOutput}, got ${actualOutput}`);

// Clean up
airport = undefined;
plane = undefined;
expectedOutput = undefined;
actualOutput = undefined;
testResult = undefined;

// Test 11
testName = 'Test 11 - planes must not be able to land if the weather is stormy';

// Arrange
airport = new Airport();
plane = new Plane();
airport.weather = 'stormy';
console.log(airport.weather);
expectedOutput = 0;
actualOutput, testResult;

// Act
airport.instructToLand(plane);
actualOutput = airport.planes.length;

// Assert
testResult = actualOutput === expectedOutput;

// Report
console.log(`${testName}. Passes: ${testResult}; expected ${expectedOutput}, got ${actualOutput}`);

// Clean up
airport = undefined;
plane = undefined;
expectedOutput = undefined;
actualOutput = undefined;
testResult = undefined;

// Test 12
testName = 'Test 12 - planes must not be able to take off if the weather is stormy';

// Arrange
airport = new Airport();
plane = new Plane();
airport.weather = 'stormy';
airport.planes = [plane];
expectedOutput = 1;
actualOutput, testResult;

// Act
airport.takeOff(plane);
actualOutput = airport.planes.length;

// Assert
testResult = actualOutput === expectedOutput;

// Report
console.log(`${testName}. Passes: ${testResult}; expected ${expectedOutput}, got ${actualOutput}`);

// Clean up
airport = undefined;
plane = undefined;
expectedOutput = undefined;
actualOutput = undefined;
testResult = undefined;


