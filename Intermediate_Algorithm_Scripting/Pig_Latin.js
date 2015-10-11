// Translate the provided string to pig latin.

// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

// If a word begins with a vowel you just add "way" to the end.

function translate(str) {

  	var reg = /[aeiou]/gi;

  	if (str[0].match(reg)) {
	  	return str + 'way';
  	} else {
	  	var indexOfVowel = str.indexOf(str.match(reg)[0]);
	  	return str.slice(indexOfVowel) + str.substr(0, indexOfVowel) + 'ay';
    }

}

translate("consonant");
