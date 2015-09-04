function where(collection, source) {
  var arr = Object.keys(source);

  return collection.filter(function(value) {
    for (var i = 0; i < arr.length; i++) {
      if (!value.hasOwnProperty(arr[i]) || value[arr[i]] !== source[arr[i]]) {
        return false;
      }
    }
    return true;
  });
}

where([
  { first: 'Romeo', last: 'Montague' }, 
  { first: 'Mercutio', last: null },
  { first: 'Tybalt', last: 'Capulet' }],
      { last: 'Capulet' });
