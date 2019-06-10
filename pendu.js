var wordsToGuess = [
  "Awkward",
  "Bagpipes",
  "Banjo",
  "Bungler",
  "Croquet",
  "Crypt",
  "Dwarves",
  "Fervid",
  "Fishhook",
  "Fjord",
  "Gazebo",
  "Gypsy",
  "Haiku",
  "Haphazard",
  "Hyphen",
  "Ivory",
  "Jazzy",
  "Jiffy",
  "Jinx",
  "Jukebox",
  "Kayak",
  "Kiosk",
  "Klutz",
  "Memento",
  "Mystify",
  "Numbskull",
  "Ostracize",
  "Oxygen",
  "Pajama",
  "Phlegm",
  "Pixel",
  "Polka",
  "Quad",
  "Quip",
  "Rhythmic",
  "Rogue",
  "Sphinx",
  "Squawk",
  "Swivel",
  "Toady",
  "Twelfth",
  "Unzip",
  "Waxy",
  "Wildebeest",
  "Yacht",
  "Zealous",
  "Zigzag",
  "Zippy",
  "Zombie"
];

let randomIndex = Math.floor(Math.random() * wordsToGuess.length);
var wordToGuess = wordsToGuess[randomIndex];

var wordUnderscore = [];

function createUnderscore() {
  for (let i = 0; i < wordToGuess.length; i++) {
    wordUnderscore.push("_");
  }
  return wordUnderscore;
}
console.log(createUnderscore());
