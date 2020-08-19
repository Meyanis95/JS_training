let phrase="";
phrase = prompt("Hello, je t'écoute ...");

if (phrase.charAt(phrase.length - 1) === "?") {
  console.log("Ouais Ouais...");
}
else if (phrase === "" ||phrase === " ") {
  console.log("t'es en PLS ?");
}
else if (phrase === phrase.toUpperCase() && phrase !== " ") {
  console.log("Pwa, calme-toi...");
}
else if (phrase.includes("Fortnite") || phrase.includes("fortnite")) {
  console.log("on s' fait une partie soum-soum ?");
}
else {
  console.log("balek.")
}