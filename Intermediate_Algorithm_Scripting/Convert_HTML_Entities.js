// Convert the characters "&", "<", ">", '"' (double quote), and "'" (apostrophe), in a string to their corresponding HTML entities.

function convert(str) {
  // &colon;&rpar;

    var arr = str.split('').map(function(i){

        if (i === '&') {
            i = '&amp;';
        } else if (i === '<') {
            i = '&lt;';
        } else if (i === '>') {
            i = '&gt;';
        } else if (i === '"') {
            i = '&quot;';
        } else if (i === "'") {
            i = '&apos;';
        }

        return i;

    });

    return arr.join('');

}

convert("Dolce & Gabbana");
