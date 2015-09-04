function end(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var targetWord = -(target.length);
  if (str.substr(targetWord) === target) {
    return true;
  } else {
    return false;
  }
}

end('Bastian', 'n');
