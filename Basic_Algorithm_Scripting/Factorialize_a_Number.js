// Basic recurssion problem
function factorialize(num) {
  if (num === 1 || num === 0) {
    return 1;
  } else {
    return num * factorialize(num - 1);
  }
}

factorialize(5);

/*
*
*
*
*
*
*
*
*/

function factorialize(num) {
  var total = 1;
  for (var i = 1; i <= num; i++){
    total *= i;
  }
 return total;
}

factorialize(5);
