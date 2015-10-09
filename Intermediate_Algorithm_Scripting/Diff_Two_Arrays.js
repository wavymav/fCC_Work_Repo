// Compare two arrays and return a new array with any items not found in both of the original arrays.

function diff(arr1, arr2) {
  var newArr = [];

  var combined = arr1.concat(arr2);

  // Same, same; but different.
  combined.filter(function(i) {
      if (arr1.indexOf(i) < 0) {
         newArr.push(i);
      }

      if (arr2.indexOf(i) < 0) {
         newArr.push(i);
      }

  });

  return newArr;
}

diff(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
