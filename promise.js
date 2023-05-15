function primaOperazione(input, callback) {
  const output = ' primaOperazione ' + input;
  console.log(output);
  if (callback) {
    callback(output);
  }
}

function secondaOperazione(input, callback) {
  const output = ' secondaOperazione ' + input;
  console.log(output);
  if (callback) {
    callback(output);
  }
}

primaOperazione('cose', (output1) => {
  secondaOperazione(output1, (output2) => {
    console.log(output2);
  })
});


function primaOperazionePromise(input) {
  const p = new Promise(
    (resolve, reject) => {
      primaOperazione(input, resolve)
    }
  )
  return p;
};

function secondaOperazionePromise(input) {
  const p = new Promise(
    (resolve, reject) => {
      secondaOperazione(input, resolve)
    }
  )
  return p;
};

primaOperazionePromise('prova')
  .then(
    output1 => secondaOperazione(output1)
  )
  .then(
    output2 => console.log(output2)
  )