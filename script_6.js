function RnaToAcides(x) {
  let new_array = []
  let rna = x.match(/.{1,3}/g);
  rna.forEach(element => {
    switch (element) {
      case "UCU": element = "Sérine";
      break;
      case "UCC": element = "Sérine";
      break;
      case "UCA": element = "Sérine";
      break;
      case "UCG": element = "Sérine";
      break;
      case "AGU": element = "Sérine";
      break;
      case "AGC": element = "Sérine";
      break;
      case "CCU": element = "Proline";
      break;
      case "CCC": element = "Proline";
      break;
      case "CCA": element = "Proline";
      break;
      case "CCG": element = "Proline";
      break;
      case "UUA": element = "Leucine";
      break;
      case "UUG": element = "Leucine";
      break;
      case "UUU": element = "Phénylalanine";
      break;
      case "UUC": element = "Phénylalanine";
      break;
      case "CGU": element = "Arginine";
      break;
      case "CGC": element = "Arginine";
      break;
      case "CGA": element = "Arginine";
      break;
      case "CGG": element = "Arginine";
      break;
      case "AGA": element = "Arginine";
      break;
      case "AGG": element = "Arginine";
      break;
      case "UAU": element = "Tyrosine";
      break;
      case "UAC": element = "Tyrosine";
      break;
    }
    new_array.push(element);
  })
  console.log(new_array.join("-"))
};

console.log("Voici la séquence d'acides aminés associée au RNA UUACGCAGUAGA:")
RnaToAcides("UUACGCAGUAGA");
console.log("Voici la séquence d'acides aminés associée au RNA CCGUCGUUGCGCUACAGC:")
RnaToAcides("CCGUCGUUGCGCUACAGC");
console.log("Voici la séquence d'acides aminés associée au RNA CCUCGCCGGUACUUCUCG:")
RnaToAcides("CCUCGCCGGUACUUCUCG");