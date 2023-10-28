/* ESERCIZI IN JS
ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina
ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio
ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella
ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine
ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata
*/

let changeTitle = function () {
  let h1 = document.getElementsByClassName("shop-name")[0];
  h1.innerText = "Sono stato cambiato";
};

changeTitle();

let changeBG = function () {
  let bg = document.getElementsByTagName("body")[0];
  bg.style.backgroundColor = "cyan";
};

changeBG();

let changeLink = function () {
  let link = document.getElementsByTagName("a")[1];
  link.attributes.href.value = "https://www.google.com";
};

changeLink();

let linksCss = function () {
  let links = document.getElementsByTagName("a");

  for (let i = 0; i < links.length; i++) {
    links[i].classList.add("new-class");
  }
};

linksCss();

let imgsClasses = function () {
  let imgs = document.getElementsByTagName("img");

  for (let i = 0; i < imgs.length; i++) {
    if (!imgs[i].classList.length) {
      imgs[i].classList.add("show");
    } else {
      imgs[i].classList.remove("show");
    }
  }
};

imgsClasses();

let changePriceColor = function () {
  let prices = document.getElementsByClassName("price");
  let colors = [];

  for (let a = 0; a < 10; a++) {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    colors.push(randomColor);
  }

  for (let i = 0; i < prices.length; i++) {
    prices[i].style.color = colors[i];
  }
};

changePriceColor();
