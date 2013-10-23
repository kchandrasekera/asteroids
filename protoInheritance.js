Function.prototype.inherits = function(Parent) {
	function Surrogate() {};
	Surrogate.prototype = Parent.prototype;
	this.prototype = new Surrogate();
}


//testing

// function Animal(name) {
//   this.animalName = name;
// };
//
// Animal.prototype.sayHello = function () {
//   console.log("Hello, my name is " + this.animalName);
// };
//
// function Dog(name) {
// 	Animal.call(this, name);
// };
//
// Dog.inherits(Animal);
//
// Dog.prototype.bark = function () {
//   console.log("Bark!");
// };
//
// snake = new Animal("Buster");
// snake.sayHello();
//
// sparky = new Dog("Sparky");
// sparky.sayHello();