// Convert the given number into a roman numeral.

function convert(num) {
  // Starting both arrays from largest to smallest
  var numerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  var decimalForm = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanNum = '';

  // iterate through deciamlForm[]
  for (var i = 0; i < decimalForm.length; i++ ) {
      // Will concat numeral value only when the num >= the current decimalForm value
      while (num >= decimalForm[i]) {
          // concats the current numerals value
          romanNum += numerals[i];
          // decraments the num value until 0
          num -= decimalForm[i];
      }
  }

  return romanNum;
}

convert(29);
