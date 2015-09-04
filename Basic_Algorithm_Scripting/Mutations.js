function mutation(arr) { 
  var firstArr = arr[0].toLowerCase().split(''),
      secondArr = arr[1].toLowerCase().split('');

  for (var i = 0; i < secondArr.length; i++) {
    if (firstArr.indexOf(secondArr[i]) < 0) {
      return false;
    }
  }
  return true;
}

mutation(['hello', 'hey']);
