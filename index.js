class Carrello {
  getTotale() {
    let totale = 0;
    for (let i = 0; i < this.prodotti.length; i++) {
      const prodotto = this.prodotti[i];
      totale += prodotto.prezzo * prodotto.qty;
    }

    return totale;
  }
}
const carrello2 = new Carrello();
carrello2.prodotti = [
  {
    id: 1,
    descrizione: 'Mario Kart',
    prezzo: 1000,
    qty: 5
  },
  {
    id: 2,
    descrizione: 'Mario Party',
    prezzo: 500,
    qty: 10
  }
];

const carrello = {
  prodotti: [
    {
      id: 1,
      descrizione: 'Mario Kart',
      prezzo: 1000,
      qty: 5
    },
    {
      id: 2,
      descrizione: 'Mario Party',
      prezzo: 500,
      qty: 10
    }
  ],
  getTotale() {
    let totale = 0;
    for (let i = 0; i < this.prodotti.length; i++) {
      const prodotto = this.prodotti[i];
      totale += prodotto.prezzo * prodotto.qty;
    }
    return totale;
  }
};


carrello.prodotti.forEach((prodotto) => {

})

function getTotaleCarrello(prodotti) {
  let totale = 0;
  for (let i = 0; i < prodotti.length; i++) {
    const prodotto = prodotti[i];
    totale += prodotto.prezzo * prodotto.qty;
  }
  // return totale;
  totale = 0;
  for (let prodotto of prodotti) {
    totale += prodotto.prezzo * prodotto.qty;
  }
  for (let index in prodotti) {
    const prodotto = prodotti[index];
    totale += prodotto.prezzo * prodotto.qty;
  }
  
  while (i < prodotti.length) {

  }
  do {

  } while(false);

  
}
/* console.log(getTotaleCarrello(carrello.prodotti));
console.log(
  carrello['prodotti'],
  carrello.prodotti,
  carrello.prodotti.length,
  carrello.getTotale()
) */

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
