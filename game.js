(function(root){
	var Asteroids = root.Asteroids = (root.Asteroids || {});

	var DIM_X = 500;
	var DIM_Y = 500;
	var FPS = 100;

  var Game = Asteroids.Game = function(ctx){
  	this.ctx = ctx;
		this.asteroids = this.addAsteroids(5);
		this.ship = new Asteroids.Ship([DIM_X/2, DIM_Y/2], [0,0]);
		this.intervalID = null
  };

	Game.prototype.addAsteroids = function(numAsteroids){
		var ourAsteroids = [];

		for(var i = 0; i < numAsteroids; i++){
			ourAsteroids.push(Asteroids.randomAsteroid(DIM_X, DIM_Y));
		}

		return ourAsteroids;
	}

	Game.prototype.draw = function(){
		this.ctx.clearRect(0,0,DIM_X,DIM_Y);
		this.asteroids.forEach(function(asteroid){
			asteroid.draw(ctx);
		})
		this.ship.draw(ctx);
	}

	Game.prototype.move = function(){
		this.asteroids.forEach(function(asteroid){
			asteroid.move();
		})
		this.ship.move();
	}

	Game.prototype.step = function(){
		this.checkCollisions();
		this.move();
		this.draw();
	}

	Game.prototype.start = function(){
		this.intervalID = setInterval(this.step.bind(this), FPS);
	}

	Game.prototype.checkCollisions = function(){
		that = this;
		this.asteroids.forEach(function(asteroid) {
			if (asteroid.isCollidedWith(that.ship)) {
				alert("You Lost!");
				that.stop();
			}
		})
	}

	Game.prototype.stop = function(){
		clearInterval(this.intervalID);
	}

})(this);