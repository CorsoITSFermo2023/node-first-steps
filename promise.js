function primaOperazione(input, callback) {
  const output = ' primaOperazione ' + input;
  console.log(output);
  if(callback) {
    callback(output);
  }
}

function secondaOperazione(input, callback) {
  const output = ' secondaOperazione ' + input;
  console.log(output);
  if(callback) {
    callback(output);
  }
}

primaOperazione('cose', (output1) => {
  secondaOperazione(output1, (output2) => {
    console.log(output2);
  })
});


const p = new Promise();