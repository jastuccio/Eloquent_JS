(function() {

	var range = function(start, end, step) {
		//Don't use || to set default values in JavaScript
		//codereadability.com/javascript-default-parameters-with-or-operator/
		var arr = [];
		// console.log("step === undefined?" + step  );	

		if (!step) {
			step = start < end ? 1 : -1;
		}

		// for incremental arrays
		if (start < end) {

			for (i = start; i <= end; i += step) {
				arr.push(i);
			}

			// for decremental arrays
		} else {
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

  }());