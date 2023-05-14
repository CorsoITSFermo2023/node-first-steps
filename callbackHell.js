function primaOperazione(input, genoveffa) {
  const output = ' primaOperazione ' + input;
  console.log(output);
  if(genoveffa) {
    genoveffa(output);
  }
}

function secondaOperazione(input, callback) {
  const output = ' secondaOperazione ' + input;
  console.log(output);
  if(callback) {
    callback(output);
  }
}

const callback1 = function (output1) {
  secondaOperazione(output1, (output2) => {
    console.log(output2);
  })
}

primaOperazione('cose', callback1);
callback1();