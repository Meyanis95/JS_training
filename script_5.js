const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

//Question 1
console.log("Est-ce que tous les livres ont été empruntés ?")
let has_rented = false
books.forEach(book => {
  let map = new Map(Object.entries(book));
  if (map.get('rented') > 0) {
    has_rented = true;
  };
});
console.log(has_rented);

//Question 2
console.log("Quel livre a été le plus emprunté ?")
let all_rented = []
books.forEach(book => {
  let map = new Map(Object.entries(book));
  all_rented.push(map.get('rented'))
  });
console.log(Math.max(...all_rented))

//Question 3
console.log("Quel livre a été le moins emprunté ?")
console.log(Math.min(...all_rented))

//Question 4
console.log("Le livre avec l'ID 873495 est :");
console.log(books.find(obj => obj.id === 873495).title);

//Question 5
console.log("On supprime le livre avec l'ID 133712");
books.splice(books.findIndex(obj => obj.id === 133712),1);
console.log(books);

//Question 6
function compare( a, b ) {
  if ( a.title < b.title ){
    return -1;
  }
  if ( a.title > b.title ){
    return 1;
  }
  return 0;
}
console.log("Les livres triés par ordre alphabétique :");
console.log(books.sort( compare ));
