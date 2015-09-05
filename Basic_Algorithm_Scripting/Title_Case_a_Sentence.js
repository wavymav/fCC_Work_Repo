/*
Return the provided string with the first letter of each word capitalized.

For the purpose of this exercise, you should also capitalize connecting words like 'the' and 'of'.
*/
function titleCase(str) {
  var wordArray = str.split(' '),
      newWordArray = [],
      firstLetter,
      restOfWord,
      newWord;

  for (var i = 0; i < wordArray.length; i++) {
    firstLetter = wordArray[i].charAt(0).toUpperCase();
    restOfWord = wordArray[i].substr(1).toLowerCase();
    newWord = firstLetter + restOfWord;

    newWordArray.push(newWord);
  }

  return newWordArray.join(' ');
}

titleCase("I'm a little tea pot");
