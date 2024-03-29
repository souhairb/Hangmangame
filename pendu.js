///créer l'array avec les mots à deviner
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

// variables créées pour mettre la lettre cliquée dans le bon compartiment

var wordUnderscore;
var endGame;
var wordToGuess;
var timePassed;
var intervalId;
var imagesArray = [
  "./hangmanImg/0.png",
  "./hangmanImg/1.png",
  "./hangmanImg/2.png",
  "./hangmanImg/3.png",
  "./hangmanImg/4.png",
  "./hangmanImg/5.png",
  "./hangmanImg/6.png"
];
var errorCounter = 0;
//timer
function timer() {
  intervalId = setInterval(() => {
    if (timePassed > 0) {
      timePassed--;
    } else {
      // endGame = true;
      clearInterval(intervalId);
   
      start();
    }
    document.getElementById("timer").innerHTML = timePassed;
  }, 1000);
}
// document.getElementById("timer").innerHTML = timer();

//DOM MANIPULATION----------------------------------------------------------------------
let docUnderscore = document.getElementsByClassName("wordUnderscore");
document.getElementById("hangman").src = "./hangmanImg/0.png";







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

function stop(){
  clearInterval(intervalId);
  wordUnderscore = [];
endGame = false;
wordToGuess=[];
timePassed=60;
}


function start() {
  clearInterval(intervalId);
   wordUnderscore = [];
 endGame = false;
 wordToGuess=[];
 timePassed=60;
 document.getElementById("hangman").src = imagesArray[0];
 errorCounter=0;
 resetLetterColor();

  if (endGame === false) {
    //choisir un mot de la liste de façon aléatoire
    let randomIndex = Math.floor(Math.random() * wordsToGuess.length);
    wordToGuess = wordsToGuess[randomIndex];
    console.log(wordToGuess);
    docUnderscore[0].innerHTML = createUnderscore();
    console.log(docUnderscore[0].innerHTML);
    // le joueur débute la partie
    // clique sur une lettre

    console.log(docUnderscore);
    timer();
  }
}

function resetLetterColor() {
  const letters = document.querySelectorAll(".letter");
  letters.forEach(let => let.style.backgroundColor = "#ffffff" )
}

document.addEventListener("keypress", event => {
  //var keycode = event.keyCode; // renvoie le numéro de la lettre pressée dans le clavier
  let letterClick = String.fromCharCode(event.keyCode); //convertit le keycode en lettre
  console.log(letterClick);
  document.getElementById(
    "calque_" + letterClick.toLowerCase()
  ).style.backgroundColor = "#f0fb1b";

  //si la lettre est correcte:
  if (errorCounter > -6) {
    if (wordToGuess.indexOf(letterClick) > -1) {
      function getAllIndexes() {
        for (let i = 0; i < wordToGuess.length; i++) {
          if (wordToGuess[i] === letterClick) wordUnderscore[i] = letterClick; //remplace l'underscore par la lettre trouvée
        }
       
        return wordUnderscore;
      }
      docUnderscore[0].innerHTML = getAllIndexes().join(" ");
      if(wordUnderscore.join("")===wordToGuess){
        // alert("Bravo!");
        wordUnderscore = [];
        setTimeout(() => alert("Bravo!"), 1000)
        setTimeout(() =>{
         start();
          }, 2000)
      }
      //si la lettre est fausse
    } else {
      errorCounter += wordToGuess.indexOf(letterClick);
      console.log(errorCounter);
      if (errorCounter === -1) {
        document.getElementById("hangman").src = imagesArray[1];
        alert("Oups!");
      } else if (errorCounter === -2) {
        document.getElementById("hangman").src = imagesArray[2];
        alert("Oups!");
      } else if (errorCounter === -3) {
        document.getElementById("hangman").src = imagesArray[3];
        alert("Oups!");
      } else if (errorCounter === -4) {
        document.getElementById("hangman").src = imagesArray[4];
        alert("Oups!");
      } else if (errorCounter === -5) {
        document.getElementById("hangman").src = imagesArray[5];
        alert("Oups!");
      } else if (errorCounter === -6) {
        document.getElementById("hangman").src = imagesArray[6];
        setTimeout(() => alert("Oups!"), 1000)
        setTimeout(() =>{
         start();
          }, 2000)
      //  timePassed = 0;
      //  start();
      }
    }
  } 
});