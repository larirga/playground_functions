// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 && valor2 === true) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let arrayDeStrings = [];
  arrayDeStrings = string.split(' ');
  return arrayDeStrings;
}

// Desafio 4
function concatName(string) {
  let arrayDeString = [];
  arrayDeString += string[string.length - 1] + ', ' + string[0];
  return arrayDeString;
}

// Desafio 5
function footballPoints(wins, ties) {
  if (wins) {
    return (wins * 3) + ties;
  }
  return (wins + ties);
}

// Desafio 6
function highestCount(arrayNumber) {
  let highestNumber = arrayNumber[0];
  let count = 0;
  for (let index = 0; index < arrayNumber.length; index += 1) {
    if (arrayNumber[index] > highestNumber) {
      highestNumber = arrayNumber[index];
    }
  }
  for (let index2 = 0; index2 < arrayNumber.length; index2 += 1) {
    if (arrayNumber[index2] === highestNumber) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(cat1, cat2, mouse) {
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse - cat2);
  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  } if (distanceCat1 > distanceCat2) {
    return 'cat2';
  } if (distanceCat1 === distanceCat2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
