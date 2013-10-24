(function(root) {
	var Asteroids = root.Asteroids = (root.Asteroids || {});

	var COLOR = "red";
  var RADIUS = 20;

	var Ship = Asteroids.Ship = function (pos, vel) {
		Asteroids.MovingObject.call(this, pos, vel, RADIUS, COLOR);
	};

	Ship.inherits(Asteroids.MovingObject);

})(this);