(function(root){
	var Asteroids = root.Asteroids = (root.Asteroids || {});

	var DIM_X = 500;
	var DIM_Y = 500;
	var FPS = 100;

  var Game = Asteroids.Game = function(ctx){
  	this.ctx = ctx;
		this.asteroids = this.addAsteroids(5);
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
	}

	Game.prototype.move = function(){
		this.asteroids.forEach(function(asteroid){
			asteroid.move();
		})
	}

	Game.prototype.step = function(){
		this.move();
		this.draw();
	}

	Game.prototype.start = function(){
		setInterval(this.step.bind(this), FPS);
	}

})(this);