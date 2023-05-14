const numero = 1;
const stringa = "stringa";
const boleano = true;
const nonDefinito = undefined;
const nullo = null;
const oggetto = {}
const array = [];
const data = new Date;
function funzione() { };
console.log(
  typeof numero,
  typeof stringa,
  typeof boleano,
  typeof nonDefinito,
  typeof nullo,
  typeof oggetto,
  typeof array,
  typeof data,
  typeof funzione,
  typeof Carrello
)

function prima(input) {
  console.log('in prima', this);
  return input;
}
const seconda = function (input) {
  console.log('in seconda', this);
  return input;
}
const secondaDue=seconda;
const terza = (input) => {
  console.log('in terza', this)
  return input;
}
const quarta = (input) => console.log('in quarta', input)

console.log(
  prima('ciao'),
  seconda('ciao'),
  terza('ciao'),
  quarta('ciao'),
)