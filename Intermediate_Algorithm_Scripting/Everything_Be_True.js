// Check if the predicate (second argument) returns truthy (defined) for all elements of a collection (first argument).

// For this, check to see if the property defined in the second argument is present on every element of the collection.

// Remember, you can access object properties through either dot notation or [] notation.

function every(collection, pre) {
	// Does everyone have one of these?

    // Keeps track objects that have prop name
    var numTrue = 0;

    // Checks each index if prop exists
    collection.forEach(function(i) {
        // if true numTrue increments by one
        if (i.hasOwnProperty(pre)) {
            numTrue++;
        }
    });

    // Returns true if numTrue matches the number of items in the array
    // else will return false
    if (numTrue === collection.length) {
        return true;
    } else {
        return false;
    }
    
}

every([{"user": "Tinky-Winky", "sex": "male"},{"user": "Dipsy", "sex": "male"},{"user": "Laa-Laa", "sex": "female"},{"user": "Po", "sex": "female"}], "sex");
