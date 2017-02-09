/*
The sum of a range

The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:

console.log(sum(range(1, 10)));
Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the previous program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used to build up the array. If no step is given, the array elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
*/

(function() {
	var range = function(start, end, step) {
		//Don't use || to set default values in JavaScript
		//codereadability.com/javascript-default-parameters-with-or-operator/
		var arr = [];
		if (!step) {
			step = start < end ? 1 : -1;
		}
	
		if (start < end) {			// for incremental arrays
			for (i = start; i <= end; i += step) {
				arr.push(i);
			}
		} else {				// for decremental arrays
			for (i = start; i >= end; i += step) {
				arr.push(i);
			}
		}
		return arr;
	};

	var sum = function(arr) {
		var total = arr.reduce(function(prev, curr) {
			return prev + curr;
		});

		return total;
	};

	console.log("expected 1,2,3,4,5,6,7,8,9,10 \nresult: " + range(1, 10));
	console.log("sum; expected 55 \nresult is: " + sum(range(1, 10)));
	console.log("positive range by 2s; expected '1, 3, 5, 7, 9'\nresult: " + range(1, 10, 2));
	console.log("negative range; expected '5, 4, 3, 2'\nresult: " + range(5, 2, -1));
	console.log("negative range by 10s; expected '70, 60, 50, 40'\nresult: " + range(70, 40, -10));

  }());
