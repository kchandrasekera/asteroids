var sum = function() {
	var sum = 0
	for(i=0; i<arguments.length; i++) {
		sum += arguments[i];
	}
	return sum;
}



Function.prototype.myBind = function(obj) {
	var args = Array.prototype.slice.call(arguments);
	var that = this;

	return function() {
    var inner_args = Array.prototype.slice.call(arguments);
		return that.apply(obj, args.concat(inner_args));
	};
}

var mySum = sum.myBind(null, 1, 2);


var curriedSum = function(numArgs) {
	var numbers = [];

	var _curriedSum = function(num){
		numbers.push(num);
		if(numbers.length === numArgs){
			return sum.apply(null, numbers);
		}
		else {
			//console.log(this);
			return _curriedSum;
		}
	};
	return _curriedSum;
}


Function.prototype.curry = function(numArgs) {
	var args = [];
	var that = this;

	var _curriedFunction = function(arg) {
		args.push(arg);
		if (args.length === numArgs) {
			return that.apply(null, args);
		}
		else {
			return _curriedFunction;
		}
	};

	return _curriedFunction;
}

console.log(sum.curry(4)(1)(2)(7)(7));
