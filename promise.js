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
      primaOperazione(input, (output1) => {
        resolve(output1)
      })
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

let a1 = ((1 + 1) + 4) + 3;

const p1 = primaOperazionePromise('prova')
  .then(
    (output1) => {
      return secondaOperazionePromise(output1)
    } 
  )
const p2 = p1
  .then(
    (output2) => {
      console.log(output2)
      return output2;
    }
  );

const fine = p2.then(
  finale => console.log(finale)
)