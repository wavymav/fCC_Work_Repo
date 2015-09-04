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
