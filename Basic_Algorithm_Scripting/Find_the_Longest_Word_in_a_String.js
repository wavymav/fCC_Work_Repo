function findLongestWord(str) {
  var wordArray = str.split(' '),
      previousWordLength = 0,
      longestWord,
      currentWordLength;

  for (var i = 0; i < wordArray.length; i++) {
    currentWordLength = wordArray[i].length;
    if (currentWordLength > previousWordLength) {
      previousWordLength = currentWordLength;
      longestWord = wordArray[i];
    }
  }
  return longestWord.length;
}

findLongestWord('The quick brown fox jumped over the lazy dog');
