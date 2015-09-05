/*
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a multidimensional array.
*/
function chunk(arr, size) {
  // Break it up.
  var chunkArr = [];
  for (var i = 0; i < arr.length; i+= size) {
    chunkArr.push(arr.slice(i, i + size));
  }
  return chunkArr;
}

chunk(['a', 'b', 'c', 'd'], 2);
