function primaOperazione(input, callback) {
  setTimeout(() => {
    const output = ' primaOperazione ' + input;
    console.log(output);
    if (callback) {
      callback(output);
    }
  }, 0)
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
    (output1) => {
      return secondaOperazionePromise(output1)
    } 
  )
  .then(
    (output2) => {
      console.log(output2)
      return output2;
    }
  )