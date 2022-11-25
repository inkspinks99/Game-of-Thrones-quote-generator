// Fokusoidaan dropdown heti kun sivu lataa, että voi alkaa etsimään henkilöä ilman klikkausta.
window.onload = document.getElementById("search").select();

// Luodaan tarvittavat muuttujat ja annetaan niille arvot, mitkä ei muutu myöhemmin.
var character;
const linkki = "https://api.gameofthronesquotes.xyz/v1/author/";
var search = document.getElementById("search");

// Luodaan sivulle otsikko.
document.getElementById("heading").innerHTML =
  "Your daily Game of Thrones quote<br>";

// Tyhjennetään hakukenttä, jos käyttäjä haluaakin käyttää dropdownia.
document.getElementById("gameOfThrones").addEventListener("click", function () {
  document.getElementById("search").value = "";
});

// Kun käyttäjä on valinnut dropdownista henkilön, annetaan henkilölle APIn mukainen nimi ja lähetetään tämä tieto APIin.
function showCharacters() {
  document.getElementById("gameOfThrones").select();
  switch (document.getElementById("gameOfThrones").value) {
    case "Jon Snow":
      character = "jon";
      break;

    case "Sansa Stark":
      character = "sansa";
      break;

    case "Ned Stark":
      character = "ned";
      break;

    case "Catelyn Stark":
      character = "catelyn";
      break;

    case "Jaime Lannister":
      character = "jaime";
      break;

    case "Tyrion Lannister":
      character = "tyrion";
      break;

    case "Cersei Lannister":
      character = "cersei";
      break;

    case "Joffrey Baratheon":
      character = "joffrey";
      break;

    case "Aerys Targaryen":
      character = "aerys";
      break;

    case "Aemon Targaryen":
      character = "aemon";
      break;

    case "Daenerys Targaryen":
      character = "daenerys";
      break;

    case "Tywin Lannister":
      character = "tywin";
      break;

    case "Ramsay Bolton":
      character = "ramsay";
      break;

    case "Arya Stark":
      character = "arya";
      break;

    case "Robert Baratheon":
      character = "robert";
      break;

    case "Theon Greyjoy":
      character = "theon";
      break;

    case "Samwell Tarly":
      character = "samwell";
      break;

    case "Lord Varys":
      character = "varys";
      break;

    case "Bran Stark":
      character = "bran";
      break;

    case "Brienne of Tarth":
      character = "brienne";
      break;

    case "Petyr Baelish":
      character = "petyr";
      break;

    case "Tormund":
      character = "tormund";
      break;

    case "Melisandre":
      character = "melisandre";
      break;

    case "Olenna Tyrell":
      character = "olenna";
      break;

    case "Mance Rayder":
      character = "mance";
      break;

    case "Ygritte":
      character = "ygritte";
      break;

    // Mikäli henkilöä ei löydy listasta tai tulee kirjoitusvirhe, annetaan virheviesti ja tyhjennetään hakukenttä.
    default:
      character = null;
      var name = document.getElementById("gameOfThrones").value;
      alert(
        'The character "' +
          name +
          '" could not be found. Please use the dropdown or enter a new keyword.'
      );
      document.getElementById("gameOfThrones").value = "";
  }
  // Kun haku on mennyt läpi, lähdetään lataamaan tietoa JSON:ista.
  loadJSON();
}

// Sama kuin aikasemmin, mutta tällä kertaa hakukenttä eikä dropdown.
function searchFunction() {
  var hakusana = document.getElementById("search").value;
  /**
   *  Trimmataan hakusanasta tyhjät alusta ja lopusta pois ja tehdään kaikista kirjaimista pieniä.
   *  Lisättiin myös monta "case", jotta voi hakea esimerkiksi lempinimellä.
   **/
  hakusana = hakusana.trim();
  hakusana = hakusana.toLowerCase();
  switch (hakusana) {
    case "jon snow":
    case "jon":
      character = "jon";
      break;

    case "sansa stark":
    case "sansa":
      character = "sansa";
      break;

    case "ned stark":
    case "ned":
    case "eddard":
    case "eddard stark":
      character = "ned";
      break;

    case "catelyn stark":
    case "catelyn":
    case "cat":
      character = "catelyn";
      break;

    case "jaime lannister":
    case "jaime":
    case "kingslayer":
    case "king slayer":
      character = "jaime";
      break;

    case "tyrion lannister":
    case "tyrion":
    case "imp":
    case "the imp":
      character = "tyrion";
      break;

    case "cersei lannister":
    case "cersei":
      character = "cersei";
      break;

    case "joffrey baratheon":
    case "joffrey":
    case "joff":
      character = "joffrey";
      break;

    case "aerys targaryen":
    case "aerys":
    case "mad king":
      character = "aerys";
      break;

    case "aemon targaryen":
    case "aemon":
      character = "aemon";
      break;

    case "daeneryes targaryen":
    case "daeneryes":
    case "dany":
      character = "daenerys";
      break;

    case "tywin lannister":
    case "tywin":
      character = "tywin";
      break;

    case "ramsey bolton":
    case "ramsey":
      character = "ramsay";
      break;

    case "arya stark":
    case "arya":
      character = "arya";
      break;

    case "robert baratheon":
    case "robert":
      character = "robert";
      break;

    case "theon greyjoy":
    case "theon":
      character = "theon";
      break;

    case "samwell tarly":
    case "samwell":
    case "sam":
      character = "samwell";
      break;

    case "lord varys":
    case "varys":
      character = "varys";
      break;

    case "bran stark":
    case "bran":
    case "three eyed raven":
      character = "bran";
      break;

    case "brienne of tharth":
    case "brienne":
      character = "brienne";
      break;

    case "petyr baelish":
    case "petyr":
    case "littlefinger":
    case "little finger":
      character = "petyr";
      break;

    case "tormund":
      character = "tormund";
      break;

    case "melisandre":
    case "red woman":
      character = "melisandre";
      break;

    case "olenna tyrell":
    case "olenna":
    case "queen of thorns":
      character = "olenna";
      break;

    case "mance rayder":
    case "mance":
    case "king beyond the wall":
      character = "mance";
      break;

    case "ygritte":
      character = "ygritte";
      break;

    // Mikäli henkilöä ei löydy listasta tai tulee kirjoitusvirhe, annetaan virheviesti ja tyhjennetään hakukenttä.
    default:
      character = null;
      var name = document.getElementById("search").value;
      alert(
        'The character "' +
          name +
          '" could not be found. Please use the dropdown or enter a new keyword.'
      );
      document.getElementById("search").value = "";
  }
  loadJSON();
}

/** Luodaan async-funktio, joka ottaa vastaan aikasemmin määritellyn linkin
 *  ja lisää sen perään hakutuloksesta saadun henkilön nimen.
 *
 * Haetaan APIn tulos await fetch-komennolla ja muotoillaan tulos JSON-muotoon .json()-komennolla.
 * Sitten lähetetään tulos showQuote-funktioon.
 **/
async function loadJSON() {
  if (character != undefined) {
    var url = `${linkki}` + character;
    const response = await fetch(url);
    const cleaned = await response.json();
    showQuote(cleaned);
  }
}

/** Haetaan "results"-div, ja lisätään sinne haluttu tulos käyttämällä "cleaned"-tuloksen perässä halutun JSON-kohdan nimeä.
 * Tässä esimerkiksi käytettiin "sentence" ja "character.name".
 **/
async function showQuote(cleaned) {
  document.getElementById("search").value = "";
  document.getElementById("results").innerHTML = `
    <div class = "quotes">
        <h3 class = "quote">${cleaned.sentence}</h3>
        <p class = "character">- ${cleaned.character.name}, ${cleaned.character.house.name} </p>
    </div>
    `;
}

// Luotiin event listener kuuntelemaan napin painalluksia, ja jos painaa enteriä, simuloidaan napin painallus.
search.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("searchButton").click();
  }
});
