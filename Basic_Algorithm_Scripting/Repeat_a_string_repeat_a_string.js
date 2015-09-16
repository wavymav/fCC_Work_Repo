// Repeat a given string (first argument) n times (second argument). Return an empty string if n is a negative number.

function repeat(str, num) {
  // repeat after me
  var repeatedString = '';
  if (num > 0) {
    for (var i = 0; i < num; i++) {
      repeatedString += str;
    }
    return repeatedString;
  } else if (num < 0) {
    return repeatedString;
  }
}

repeat('abc', 3);
