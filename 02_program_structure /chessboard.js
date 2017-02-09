/*

Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
When you have a program that generates this pattern, define a variable size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.
*/

var boardSize = 12;
var row = "";

for (i = 0; i < boardSize; i++) {
	
	if (i % 2 === 0) { row += '#'; }  // start even rows with "#"

	for (j = 0; row.length < boardSize -1; j++) {
  	row += ' ';
  	row += '#';
  }
  row + "\n";

  console.log(row);
  row = "";
  // console.log("i = " + i);

}
