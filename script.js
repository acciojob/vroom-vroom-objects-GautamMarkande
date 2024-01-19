// Complete the js code
function Car(make, model) {
	this.make=make,
	this.model=model
}
const car1 = new Car('goli','a5');
car1.prototype.getMakeModel=function(){
	return `${this.make} ${this.model}`;
}
function SportsCar(make, model, topSpeed) {
	Car.call(this,make,model);
	this.topSpeed = topSpeed
}
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar 
const sport1 = new SportsCar('goli','a5',100);
// Do not change the code below

sport1.prototype.getTopSpeed=function(){
	return `${this.topSpeed}`
}
window.Car = Car;
window.SportsCar = SportsCar;
