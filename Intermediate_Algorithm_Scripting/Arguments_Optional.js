// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

// For example, add(2, 3) should return 5, and add(2) should return a function.

// Calling this returned function with a single argument will then return the sum:

// var sumTwoAnd = add(2);

// sumTwoAnd(3) returns 5.

// If either argument isn't a valid number, return undefined.

function add(num1, num2) {
    
    if (arguments.length === 1) {
		if (typeof num1 !== 'number') {
            return undefined;
        } else {
            return function(num2) {
                if (typeof num2 !== 'number') {
                    return undefined;
                } else {
                    return num1 + num2;
                }
            };
        }
    } else {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            return undefined;
        } else {
            return num1 + num2;
        }
    }

}

add(2,3);
