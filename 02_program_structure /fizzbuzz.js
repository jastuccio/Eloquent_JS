/*FizzBuzz
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
*/

(function(){

	for (i = 1; i <= 100; i++) {
		var result = "";
	    if (i % 3 === 0) { result += "Fizz";}
	    if (i % 5 === 0) { result += "Buzz";}
	  	console.log(result || i);
	}	
	
}());