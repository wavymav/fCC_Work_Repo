// We'll pass you an array of two numbers.
// Return the sum of those two numbers and all numbers between them.

// The lowest number will not always come first.
function sumAll(arr) {
  var max = Math.max.apply(null, arr),
      min = Math.min.apply(null, arr),
      newArr = [];

  for (var i = min; i <= max; i++) {
    newArr.push(i);
  }

  return newArr.reduce(function(priviousNum, currentNum){
    return priviousNum + currentNum;
  });
}

sumAll([1, 4]);// 10
