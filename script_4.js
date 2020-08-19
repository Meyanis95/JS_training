const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

//Question 1
console.log("Les entrepreneurs nés dans les 70's")
function seventies(entrepreneur) {
  return entrepreneur.year >= 1970 && entrepreneur.year < 1980;
}
console.log(entrepreneurs.filter(seventies));

//Question 2
console.log("Les entrepreneurs par leur noms")
let names = []
entrepreneurs.forEach(person => {
  let map = new Map(Object.entries(person));
  names.push(`${map.get('first')}`+ " " + `${map.get('last')}`)
})
console.log(names);

//Question 3
console.log("Les ages de ces entrepreneurs");
let ages = [];
entrepreneurs.forEach(person => {
  let map = new Map(Object.entries(person));
  ages.push(2020 - map.get('year'));
  });
console.log(ages)

//Question 4
function compare( a, b ) {
  if ( a.last < b.last ){
    return -1;
  }
  if ( a.last > b.last ){
    return 1;
  }
  return 0;
}
console.log("Les entrepreneurs triés par ordre alphabétique :");
console.log(entrepreneurs.sort(compare));


