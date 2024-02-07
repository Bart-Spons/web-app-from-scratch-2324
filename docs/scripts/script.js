// Een div uit de html selecteren
const jsonContentDiv = document.getElementById("json-content");

// Maak een XMLHttpRequest om het JSON bestand te laden
const request = new XMLHttpRequest();
// request is de naam voor de XMLHttpRequest (http verzoeken)
request.open("GET", "https://bart-spons.github.io/web-app-from-scratch-2324/json/bart.json", true);

request.onreadystatechange = function () {
  if (request.readyState === 4 && request.status === 200) {
    // Parse the JSON response
    const jsonData = JSON.parse(request.responseText);

    // Laat alle data uit het JSON bestand zien
    jsonContentDiv.innerHTML = `
      <h1>Name: ${jsonData.name}</h1>
      <p>Age: ${jsonData.age}</p>
      <p>Geboortedatum: ${jsonData.geboortedatum}</p>
      <p>Job: ${jsonData.job}</p>
      <p>Study: ${jsonData.study}</p>
      <p>City: ${jsonData.city}</p>
      <p>Hobbies: ${jsonData.hobbies.join(", ")}</p>
      <p>Favorite Movies: ${jsonData["favourite-movies"].join(", ")}</p>
      <p>Gamen: ${jsonData.gamen ? "Yes" : "No"}</p>
      <p>Avatar URL: ${jsonData.avatar.url}</p>
      <p>Avatar Alternative Text: ${jsonData.avatar.alternativeText}</p>
    `;

    // Naam (Bart) laten zien naast de afbeelding
    // Selecteer de juiste ID uit de html
    const nameElement = document.getElementById("name");
    // Alleen 'name' laden uit het JSON bestand
    nameElement.innerText = jsonData.name;
  } else if (request.readyState === 4 && request.status !== 200) {
    // Als het niet lukt, laat een error zien
    jsonContentDiv.innerHTML = "Error loading JSON data";
  }
};

// Stuur XMLHttpRequest
request.send();


//bart


// Scrol functie
// window.addEventListener('scroll', () => {
//   const sections = document.querySelectorAll('section');
//   const navLinks = document.querySelectorAll('.nav-link');
  
//   sections.forEach((section, index) => {
//       const sectionTop = section.offsetTop;
//       const sectionHeight = section.clientHeight;

//       if (window.scrollY >= sectionTop - 50 && window.scrollY < sectionTop + sectionHeight - 50) {
//           navLinks.forEach((link) => link.classList.remove('active'));
//           navLinks[index].classList.add('active');
//       }
//   });
// });


//menu
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show'); // Laat de github pagina's zien
});

//dropdown
document.addEventListener('DOMContentLoaded', function() {
  // Github element
  const githubLink = document.querySelector('.github-toggle');

  // Github content laten zien
  const githubDropdown = document.querySelector('.dropdown-content');

  // Klik op Github om dit uit te vouwen
  githubLink.addEventListener('click', function(event) {
      event.preventDefault();
      githubDropdown.classList.toggle('expanded');
  });
});


// animatie diploma uitreiking
const imageContainer = document.getElementById('image-container');
let animationInterval;
let currentImageIndex = 0; // Houd bij welke afbeelding de huidige is

// Functie om de loop te starten
function startAnimationLoop() {
    const images = imageContainer.querySelectorAll('.image');
    let index = currentImageIndex; // Start met de huidige afbeelding

    // Set een interval om afbeeldingen te veranderen
    animationInterval = setInterval(() => {
        images.forEach(image => image.style.opacity = 0); // Verberg alle afbeeldingen
        images[index].style.opacity = 1; // Toon de huidige afbeelding
        index = (index + 1) % images.length; // Ga naar de volgende afbeelding
        currentImageIndex = index; // Update de huidige afbeelding
    }, 100); // Verander elke seconde
}

// Functie om de loop te stoppen
function stopAnimationLoop() {
    clearInterval(animationInterval); // Wis het interval
}

// Voeg event listeners toe voor de hover, over de afbeelding en vervolgens de afbeelding verlaten
imageContainer.addEventListener('mouseenter', startAnimationLoop);
imageContainer.addEventListener('mouseleave', stopAnimationLoop);

