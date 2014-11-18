var plus = function(a, b) {
	return a + b;
    };

var minus = function(a, b) {
	return a - b;
    };

var dilena = function(a,b){
    return a / b;
    };
    
var mnojena = function(a,b){
    return a * b;
    };
    
var stepin = function(a,b){
    return(Math.pow(a, b));
    };

var korin = function(a){
    return(Math.sqrt(a));
    };
var sinus = function(a){
    return(Math.sin(a));
    };
var cosinus = function(a){
    return(Math.cos(a));
    };

var func = function(a, action, b) {
	if(action === '+') {
	return plus(a, b);
	}
	
	if(action === '-') {
	return minus(a, b);
	}
	
	if(action === '/') {
	return dilena(a,b);
	}
	    
	if(action === '*') {
	return mnojena(a,b);
	}
	    
	if(action === 'pow') {
	return stepin(a,b);
	}
	    
	if(action === 'sqrt') {
	return korin(a);
	}
	if(action === 'sin') {
	return sinus(a);
	}
	if(action === 'cos') {
	return cosinus(a);
	}
};

console.log(func(2, '+', 5));
console.log(func(3, '-', 5));
console.log(func(10, '/', 5));
console.log(func(16, '/', 4));
console.log(func(57, '*', 8));
console.log(func(2, '*', 4));
console.log(func(4, 'pow', 3));
console.log(func(5, 'pow', 8));
console.log(func(9, 'sqrt'));
console.log(func(256, 'sqrt'));
console.log(func(30, 'sin'));
console.log(func(45, 'cos'));