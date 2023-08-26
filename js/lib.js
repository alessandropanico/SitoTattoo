
//-----------------------------------------
//NAVBAR CHE SCROLLANDO SI DISSOLVE
var navbar = document.getElementById("navbar");
var links = navbar.getElementsByTagName("a");
var lastScrollPos = window.scrollY;

window.onscroll = function() {
    var currentScrollPos = window.scrollY;

    if (currentScrollPos > lastScrollPos) {
        // Scroll verso il basso, nascondi la navbar
        navbar.classList.add("scrolled");
        navbar.classList.add("disabled-pointer");
        disableLinks();
    } else {
        // Scroll verso l'alto, mostra la navbar
        navbar.classList.remove("scrolled");
        navbar.classList.remove("disabled-pointer");
        enableLinks();
    }

    lastScrollPos = currentScrollPos;
};

function disableLinks() {
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("click", preventLinkClick);
        links[i].style.pointerEvents = "none";
    }
}

function enableLinks() {
    for (var i = 0; i < links.length; i++) {
        links[i].removeEventListener("click", preventLinkClick);
        links[i].style.pointerEvents = "auto";
    }
}

function preventLinkClick(event) {
    event.preventDefault();
}
//-----------------------------------------


//PULSANTI ROSSI
// Ottieni tutti i link di navigazione
const navLinks = document.getElementsByClassName("navLink");

// Aggiungi l'evento di click a ciascun link
Array.from(navLinks).forEach(link => {
  link.addEventListener("click", function(event) {
    // Rimuovi la classe "active" da tutti i link
    Array.from(navLinks).forEach(lnk => {
      lnk.classList.remove("active");
    });

    // Aggiungi la classe "active" al link cliccato
    this.classList.add("active");
  });
});

// Verifica la pagina attiva al caricamento della pagina
document.addEventListener("DOMContentLoaded", function() {
  // Ottieni l'URL della pagina corrente
  const currentURL = window.location.href;

  // Trova il link corrispondente alla pagina corrente e aggiungi la classe "active"
  Array.from(navLinks).forEach(link => {
    // Confronta solo l'URL di base senza parametri di query
    if (link.href.split("?")[0] === currentURL.split("?")[0]) {
      link.classList.add("active");
    }
  });
});

//-----------------------------------------

//SPOSTA IMMAGINE
window.addEventListener("scroll", function() {
  var scrollImg = document.getElementById("scrollImg");
  var scrollTop = window.scrollY || document.documentElement.scrollTop;
  var translation = scrollTop * 0.4; // Modifica il valore 0.4 per regolare la velocità dello spostamento

  scrollImg.style.transform = "translateX(-" + translation + "px)";
});


//-----------------------------------------

//FUNZIONI GALLERIA
function enlargeImage(image) {
  disableNavbar(); // Disabilita la navbar quando si apre l'immagine ingrandita

  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  overlay.addEventListener('click', function () {
      document.body.removeChild(overlay);
      enableNavbar(); // Abilita nuovamente la navbar quando si chiude l'immagine ingrandita
  });

  const enlargedImage = document.createElement('img');
  enlargedImage.src = image.src;
  enlargedImage.classList.add('enlarged-image');

  overlay.appendChild(enlargedImage);
  document.body.appendChild(overlay);
}

function disableNavbar() {
  navbar.classList.add("disabled");
}

function enableNavbar() {
  navbar.classList.remove("disabled");
}


//-----------------------------------------

//PULSANTi CHE SPOSTANO ALLA PAGINE
function galleria() {
  window.location.href = "galleria.html";
}

function contatti(){
  window.location.href = "contatti.html";
}

function chiSono(){
  window.location.href = "chisono.html";

}

//-----------------------------------------

//MAPPA
    // Inizializza la mappa con le coordinate del centro e lo zoom desiderati
    var lat = 40.84797626107743;
    var lng = 14.249381082857768;
    var zoomLevel = 17;

    var map = L.map('map').setView([lat, lng], zoomLevel);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    L.marker([lat, lng]).addTo(map)
        .bindPopup("Il mio punto di interesse")
        .openPopup();


