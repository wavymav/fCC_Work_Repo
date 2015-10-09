// Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.

function drop(arr, func) {
  // Drop them elements.

  var newArr = arr.filter(function(item) {
    return func(item);
  });

  return newArr;
}

drop([1, 2, 3], function(n) {return n < 3; });
