// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

// Base pairs are a pair of AT and CG. Match the missing element to the provided character.

// Return the provided character as the first element in each array.

// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

function pair(str) {

  	var newPair = [];

  	str.split('').forEach(function(i){
    	var arr = [];

    	if (i === 'C') {
        	arr.push(i, "G");
        	newPair.push(arr);
    	} else if (i === 'G') {
        	arr.push(i, "C");
        	newPair.push(arr);
    	} else if (i === 'A') {
        	arr.push(i, "T");
        	newPair.push(arr);
    	} else if (i === 'T') {
        	arr.push(i, "A");
        	newPair.push(arr);
    	}
  	});

  	return newPair;

}

pair("GCG");
