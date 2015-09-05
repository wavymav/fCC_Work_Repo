/*
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

You'll need to remove punctuation and turn everything lower case in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.
*/

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
