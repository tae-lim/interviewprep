var myAtoi = function(str) {
  var strWithoutWhiteSpaces = '';
  var numberStr = '';
  var isPositive = true;

  for (var i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      strWithoutWhiteSpaces += str[i];
    }
  }

  if (strWithoutWhiteSpaces[0] === '-') {
    isPostive = false;
  }

  for (var i = 0; i < strWithoutWhiteSpaces.length; i++) {
    if (!isNaN(Number(strWithoutWhiteSpaces[i]))) {
      numberStr += strWithoutWhiteSpaces[i];
    }
  }

  if (isPositive) {
    return Number(numberStr);
  }

  return Number('-' + numberStr);
};

