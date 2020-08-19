let num="";
num = prompt("De quel nombre veux-tu calculer la factorielle ?");
let total=1
for(let count = 1; count <=num; count++){
  total = count * total;
}
console.log(`Le résultat est: ${total}`)