/*
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i] .

If you are writing your own Chai.js tests, be sure to use a deep equal statement instead of an equal statement when comparing arrays.
*/
function largestOfFour(arr) {
  // You can do this!
  var newArray = [],
      largestNumber,
      currentNumber;

  for (var i = 0; i < arr.length; i++) {
    var comparison = 0;
    for (var j = 0; j < arr[i].length; j++) {
      currentNumber = arr[i][j];
      if (currentNumber > comparison) {
        comparison = currentNumber;
      }
    }
    largestNumber = comparison;
    newArray.push(largestNumber);
  }
  return newArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
