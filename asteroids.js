(function(root) {
	var Asteroids = root.Asteroids = (root.Asteroids || {});

	var COLOR = "black";
	var RADIUS = "30";

	var Asteroid = Asteroids.Asteroid = function (pos, vel) {
		Asteroids.MovingObject.call(this, pos, vel, RADIUS, COLOR);
	};

	Asteroid.inherits(Asteroids.MovingObject);

  var randomAsteroid = Asteroids.randomAsteroid = function(dimX, dimY){
		return new Asteroid([Math.random() * dimX, Math.random() * dimY], randomVel());
  }

	var randomVel = Asteroids.randomVel = function(){
		return [Math.random() * 10, Math.random() * 10];
	}
})(this);