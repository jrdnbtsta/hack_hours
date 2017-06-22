/*

If you are calculating complex things or execute time-consuming API calls, you sometimes want to cache the results. In this case we want you to create a function wrapper, which takes a function and caches its results depending on the arguments, that were applied to the function.
 
var complexFunction = function(arg1, arg2) {};
var cachedFunction = cache(complexFunction);

cachedFunction('foo', 'bar'); // complex function should be executed
cachedFunction('foo', 'bar'); // complex function should not be invoked again, instead the cached result should be returned
cachedFunction('foo', 'baz'); // should be executed, because the method wasn't invoked before with these arguments

 */

function cache(func) {
	// do your magic here
	let cached = {};

	return () => {
		let concat = JSON.stringify(arguments);
		
		console.log('CACHE:', cached);
		if (cached[concat]) {
			return cached[concat];
		} else {
			cached[concat] = func(args);
			return cached[concat];
		}
	}
}


var complexFunction = function(arg1, arg2) {
	return arg1 + arg2;
};

var cachedFunction = cache(complexFunction);

cachedFunction('foo', 'bar');
cachedFunction('foo', 'bar');


