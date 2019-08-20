function changeVocals(str) {
  var vocal = "aeiou";
  var newChange = "bfjpv";

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vocal.length; j++) {
      if (str[i] === vocal[j]) {
        str = str.split(str[i]).join(newChange[j]);
      } else if (str[i] === vocal[j].toUpperCase()) {
        str = str.split(str[i]).join(newChange[j].toUpperCase());
      }
    }
  }
  return str;
}

function reverseWord(str) {
  var newAlpabet = "";
  for (var k = str.length - 1; k >= 0; k--) {
    newAlpabet += str[k];
  }
  return newAlpabet;
  // atau
  // return str.split('').reverse().join('')
}

function setLowerUpperCase(str) {
  var LowerUpper = "";
  for (var l = 0; l < str.length; l++) {
    if (str[l] === str[l].toLowerCase()) {
      LowerUpper += str[l].toUpperCase();
    } else {
      LowerUpper += str[l].toLowerCase();
    }
  }
  return LowerUpper;
}

function removeSpaces(str) {
  var result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      result += str[i];
    }
  }
  return result;
}

function passwordGenerator(name) {
  if (name.length < 5) {
    return "Minimal karakter yang diinputkan adalah 5 karakter";
  }

  var alpabets = changeVocals(name);
  var reverse = reverseWord(alpabets);
  var LowUp = setLowerUpperCase(reverse);
  var remove = removeSpaces(LowUp);
  return remove;
}

console.log(passwordGenerator("Sergei Dragunov")); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator("Dimitri Wahyudiputra")); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator("Alexei")); // 'JFXFLb'
console.log(passwordGenerator("Alex")); // 'Minimal karakter yang diinputkan adalah 5 karakter'
