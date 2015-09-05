/*
Remove all falsey values from an array.

Falsey values in javascript are false, null, 0, "", undefined, and NaN.
*/
function sortOut(item) {
  if (item) {
    return item;
  }
}

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(sortOut);
}

bouncer([7, 'ate', '', false, 9]);
