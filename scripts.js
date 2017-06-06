var a = prompt('Liczba 1')
var b = prompt('Liczba 2')
var value;
              
value = (a * a) + (2 * a * b) - (b * b);
console.log(value);
if (value > 0) {
    console.log('wynik dodatni');
  } else if (value < 0){
    console.log('wynik ujemny');
  } else {
    console.log('wynik jest rowny 0')
  }