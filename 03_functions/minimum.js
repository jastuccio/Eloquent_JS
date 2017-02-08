/* Write a function min that takes two arguments and returns their minimum. */

(function(){

	var result;
	var min = function (a, b) {
		var result = a;

		if (a > b ) {
			result = b;
		}
		console.log(result);
	}

	min( 27,10);

}());