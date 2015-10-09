// Flatten a nested array. You must account for varying levels of nesting.

function steamroller(arr) {
  // I'm a steamroller, baby

  return arr.reduce(function(a, b){
    return a.concat(Array.isArray(b) ? steamroller(b) : b);
  }, []);

}

steamroller([1, [2], [3, [[4]]]]);
