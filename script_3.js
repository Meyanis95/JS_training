let num="";
num = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
for(let count = 1; count <= num; count++){
  console.log(" ".repeat(num-count) + "#".repeat(count));
}