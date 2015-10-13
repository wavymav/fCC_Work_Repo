// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.

function smallestCommons(arr) {

    arr = arr.sort();
    var min = arr[0];
    var max = arr[1];
    var range = [];
    var multiple = min;

    function greatestCommonMultiple(a, b) {
        return !b ? a : greatestCommonMultiple(b, a % b);
    }

    function leastCommonMultiple(a, b) {
        return (a * b) / greatestCommonMultiple(a, b);
    }

    for (var i = min; i <= max; i++) {
        range.push(i);
    }

    range.forEach(function(n) {
       multiple = leastCommonMultiple(multiple, n);
    });

    return multiple;
}


smallestCommons([1,5]);
