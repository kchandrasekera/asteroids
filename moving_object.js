(function(root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});

	var MovingObject = Asteroids.MovingObject = function(pos, vel, radius, color) {
		this.pos = pos,
		this.vel = vel,
		this.radius = radius,
		this.color = color;
	};

  MovingObject.prototype.move = function(){
		// console.log("Pos: " + this.pos);
		// console.log("Vel: " + this.vel);
		console.log(this);
		this.pos[0] += this.vel[0]
		this.pos[1] += this.vel[1]
		// console.log("New Pos: " + this.pos);
		// console.log("New Vel: " + this.vel);
  }

	MovingObject.prototype.draw = function(ctx){
    ctx.fillStyle = this.color;
		console.log(this.color);
		ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI);
		ctx.fill();
	}

	MovingObject.prototype.isCollidedWith = function(otherObject){
		console.log("This " + this);
		console.log("Other Object " + otherObject);
		var distance = Math.sqrt(
			             Math.pow((this.pos[0] - otherObject.pos[0]), 2) +
									 Math.pow((this.pos[1] - otherObject.pos[1]), 2));

		 console.log(this.radius + otherObject.radius);
		 console.log(distance);
	  if (this.radius + otherObject.radius > distance) {
		  return true;
		}
		else {
			return false;
		}
	}
})(this);