//créer l'array avec les mots à deviner
var wordsToGuess = [
  "awkward",
  "bagpipes",
  "banjo",
  "bungler",
  "croquet",
  "crypt",
  "dwarves",
  "fervid",
  "fishhook",
  "fjord",
  "gazebo",
  "gypsy",
  "haiku",
  "haphazard",
  "hyphen",
  "ivory",
  "jazzy",
  "jiffy",
  "jinx",
  "jukebox",
  "kayak",
  "kiosk",
  "klutz",
  "memento",
  "mystify",
  "numbskull",
  "ostracize",
  "oxygen",
  "pajama",
  "phlegm",
  "pixel",
  "polka",
  "quad",
  "quip",
  "rhythmic",
  "rogue",
  "sphinx",
  "squawk",
  "swivel",
  "toady",
  "twelfth",
  "unzip",
  "waxy",
  "wildebeest",
  "yacht",
  "zealous",
  "zigzag",
  "zippy",
  "zombie"
];

//choisir un mot de la liste de façon aléatoire
let randomIndex = Math.floor(Math.random() * wordsToGuess.length);
var wordToGuess = wordsToGuess[randomIndex];
console.log(wordToGuess);

// variables créées pour mettre la lettre cliquée dans le bon compartiment
var rightWord = [];
var wrongWord = [];
var wordUnderscore = [];

//DOM MANIPULATION----------------------------------------------------------------------
let docUnderscore = document.getElementsByClassName("wordUnderscore");

function createUnderscore() {
  //remplacer les lettres du mot tiré aléatoirement par des "underscores"
  for (let i = 0; i < wordToGuess.length; i++) {
    wordUnderscore.push("_");
  }
  return wordUnderscore.join(" ");
  //join() crée et renvoie une nouvelle chaîne de caractères en concaténant tous les éléments d'un tableau (ou d'un objet semblable à un tableau).
  //La concaténation utilise la virgule ou une autre chaîne, fournie en argument, comme séparateur.
}

//-------------------------------------------------------------------------------------------------
// le joueur débute la partie
// clique sur une lettre
document.addEventListener("keypress", event => {
  //var keycode = event.keyCode; // renvoie le numéro de la lettre pressée dans le clavier
  let letterClick = String.fromCharCode(event.keyCode); //convertit le keycode en lettre
  console.log(letterClick);

  //si la lettre est correcte:
  if (wordToGuess.indexOf(letterClick) > -1) {
    function getAllIndexes() {
      for (let i = 0; i < wordToGuess.length; i++) {
        if (wordToGuess[i] === letterClick) wordUnderscore[i] = letterClick; //remplace l'underscore par la lettre trouvée
      }
      return wordUnderscore;
    }
    getAllIndexes();
    docUnderscore[0].innerHTML = getAllIndexes().join(" ");

    alert("Bravo!");
  } else {
    alert("Oups!");
  }
});

console.log(docUnderscore);
docUnderscore[0].innerHTML = createUnderscore();
