function palindrome(str) {
  // Good luck!
  var word = str.replace(/\s|\W/g, '').toLowerCase(),
      wordReversed = str.replace(/\s|\W/g, '').split('').reverse().join('').toLowerCase();
  if ( word === wordReversed ){
    return true;
  } else {
    return false;
  }
}


palindrome("eye");
