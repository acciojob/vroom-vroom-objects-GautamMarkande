// Constructor function for Car
function Car(make, model) {
    this.make = make;
    this.model = model;
}

// Add a method to the Car prototype
Car.prototype.getMakeModel = function() {
    return this.make + ' ' + this.model;
};

// Constructor function for SportsCar
function SportsCar(make, model, topSpeed) {
    // Call the Car constructor with the provided make and model
    Car.call(this, make, model);
    this.topSpeed = topSpeed;
}

// Inherit the Car prototype in the SportsCar prototype
SportsCar.prototype = Object.create(Car.prototype);

// Add a method to the SportsCar prototype
SportsCar.prototype.getTopSpeed = function() {
    return this.topSpeed;
};

// Example usage
var myCar = new Car('Toyota', 'Camry');
console.log(myCar.getMakeModel());  // Output: Toyota Camry

var mySportsCar = new SportsCar('Ferrari', '488 GTB', 205);
console.log(mySportsCar.getMakeModel());  // Output: Ferrari 488 GTB
console.log(mySportsCar.getTopSpeed());   // Output: 205
