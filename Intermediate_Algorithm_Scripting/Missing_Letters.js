// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.
function fearNotLetter(str) {

      for (var i = 0; i < str.length; i++) {
        var currentCode = str.charCodeAt(i);

        if (currentCode !== str.charCodeAt(0) + i) {
            var missingCharCode = str.charCodeAt(i) - 1;
            var missingLetter = String.fromCharCode(missingCharCode);

            return missingLetter;
        }
    }

    return undefined;
}

fearNotLetter("abce");
