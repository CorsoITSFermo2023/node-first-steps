// perchè non usiamo return in callbackHell.js?
// alcune operazioni potrebbero essere asincrone,
// l'utilizzo delle callback permette di far eseguire
// codice al termine dell'operazione asincrona

// esempio

function primaOperazione(input, genoveffa) {
  // setTimeout è solo un'esempio
  setTimeout(() => {
    const output = ' primaOperazione ' + input;
    console.log(output);
    if (genoveffa) {
      genoveffa(output);
    }
  }, 0);
}

function secondaOperazione(input, callback) {
  setTimeout(() => {
    const output = ' secondaOperazione ' + input;
    console.log(output);
    if (callback) {
      callback(output);
    }
  }, 0)
}

/* const callback1 = function (output1) {
  secondaOperazione(output1, (output2) => {
    console.log(output2);
  })
} */

primaOperazione('cose', function (output1) {
  secondaOperazione(output1, (output2) => {
    console.log(output2);
  })
});