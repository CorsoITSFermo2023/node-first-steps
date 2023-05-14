/**
 * 
 * @param {string} input 
 */
function facciamoCose(input) {
  console.log('abbiamo fatto: ' + input)
}

function facciamoCosaDefault() {
  facciamoCose('Default');
}


// setTimeout(facciamoCose('tre secondi'), 3000);
setTimeout(() => facciamoCose('prima'), 0);
setTimeout(() => cicla(99999999), 0);
setTimeout(() => facciamoCose('terza'), 0);
console.log('Test 1');
function cicla(numero) {
  for (let i = 0; i < numero; ++i) {
    doSomeStuff();
  }
  console.log('finito ciclo di: ' + numero)
}
cicla(1000000);

console.log('Test 2');

// The 'I am an asynchronous message' will be displayed when the main thread reach here

function doSomeStuff() {
  return 1 + 1;
}