/*Write a loop that makes seven calls to console.log to output the following triangle:
*/

(function(){

	var triangle = '';
	for (i = 0; triangle.length < 7; i++) {
		triangle += '#';
		console.log(triangle);
	}

}());