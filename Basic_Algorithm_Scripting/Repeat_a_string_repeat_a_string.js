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
