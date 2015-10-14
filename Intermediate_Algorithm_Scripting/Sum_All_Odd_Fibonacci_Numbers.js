// Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number.

// The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8, and each subsequent number is the sum of the previous two numbers.

// As an example, passing 4 to the function should return 5 because all the odd Fibonacci numbers under 4 are 1, 1, and 3.

function sumFibs(num) {

  var previousNum = 0;
  var currentNum = 1;
  var sum = previousNum;

  while (currentNum <= num){

    if (currentNum % 2) {
        sum += currentNum;
    }


    currentNum += previousNum;
    previousNum = currentNum - previousNum;

  }

  return sum;
}

sumFibs(4);
