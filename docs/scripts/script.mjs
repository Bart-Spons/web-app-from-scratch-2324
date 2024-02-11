import { unified } from 'https://esm.sh/unified@11?bundle';
import remarkParse from 'https://esm.sh/remark-parse@11?bundle';
import remarkRehype from 'https://esm.sh/remark-rehype@11?bundle';
import rehypeStringify from 'https://esm.sh/rehype-stringify@8?bundle';

// Als "live" wordt getoond in de browser dan is alles goed verlopen
main().then(() => console.log("live"))

// Alle content van de github readme laten zien op de pagina
document.addEventListener('DOMContentLoaded', function() {

  const processor = unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(rehypeStringify);

  const username = 'Bart-Spons';
  const repository = 'web-app-from-scratch-2324';

  fetch(`https://api.github.com/repos/${username}/${repository}/readme`)

      .then(response => response.json())
      .then(data => processor.process(atob(data.content)))
      .then(output => {
        
          const consoleDataDiv = document.getElementById('consoleData');
          // Set the processed HTML as innerHTML of the div
          consoleDataDiv.innerHTML = String(output);
      })
      .catch(error => console.error(error));
});



// const processor = unified()
// .use(remarkParse)
// .use(remarkRehype)
// .use(rehypeStringify)

// // .process(await read('example.md'))

// // process(await read('https://github.com/Bart-Spons/web-app-from-scratch-2324/blob/main/README.md'))

// const username = 'Bart-Spons';
// const repository = 'web-app-from-scratch-2324';

// const data = fetch(`https://api.github.com/repos/${username}/${repository}/readme`)
// // // fetch(`https://github.com/Bart-Spons/web-app-from-scratch-2324/blob/main/README.md`)
//     .then(response => response.json())
   
// //////////////
// // Optie 1////
// //////////////
//     .then(data => processor.process(atob(data.content))
//     .then(output => String(output)))
//     .then(html => console.log(html))
    
//     .then(html => console.log(html))
//     .catch(error => console.error(error));




///////////
//optie 2//
///////////

  //   .then(data => {
  //     const markdownInhoud = atob(data.content); // Base64 gecodeerde inhoud van de README decoderen
      
  //     // Regelmatige expressie om de URL's van afbeeldingen in Markdown te matchen
  //     const regex = /!\[.*?\]\((.*?)\)/g;
  //     let match;
  //     const afbeeldingenContainer = document.getElementById('afbeeldingenContainer');

  //     // Doorloop elke match van de reguliere expressie
  //     while ((match = regex.exec(markdownInhoud)) !== null) {
  //         // Maak een <img> element voor elke URL van de afbeelding
  //         const afbeeldingUrl = match[1];
  //         const imgElement = document.createElement('img');
  //         imgElement.src = afbeeldingUrl;
          
  //         // Voeg het <img> element toe aan de afbeeldingen container
  //         afbeeldingenContainer.appendChild(imgElement);
  //     }
  // })
  // .catch(error => console.error(error));
  


async function main () {
    const data = await fetch('https://wwww.google.nl')
    const json = await data.json()
}




      //     const markdownContent = atob(data.content); // Decodeer de base64 gecodeerde Markdown inhoud
          
      //     // van de guide
      //     // const processor = unified()
      //       file.process(markdownContent)
      //     // processor.process(markdownContent)
      //       .then(result => {
      //         // Toon de geconverteerde HTML in het README-div-element
      //         const readmeDiv = document.getElementById('readme-github');
      //         readmeDiv.innerHTML = result.contents;
      //       })
      //       .catch(error => console.error(error));
      // })
      // .catch(error => console.error(error));


// Een div uit de html selecteren
const jsonContentDiv = document.getElementById("json-content");

// Maak een XMLHttpRequest om het JSON bestand te laden
const request = new XMLHttpRequest();
// request is de naam voor de XMLHttpRequest (http verzoeken)
request.open("GET", "https://bart-spons.github.io/web-app-from-scratch-2324/json/bart.json", true);
// request.open("GET", "./json/bart.json", true);

request.onreadystatechange = function () {
  if (request.readyState === 4 && request.status === 200) {
    // Parse the JSON response
    const jsonData = JSON.parse(request.responseText);

    // Laat alle data uit het JSON bestand zien
    // jsonContentDiv.innerHTML = `
    //   <h1>Name: ${jsonData.name}</h1>
    //   <p>Age: ${jsonData.age}</p>
    //   <p>Geboortedatum: ${jsonData.geboortedatum}</p>
    //   <p>Job: ${jsonData.job}</p>
    //   <p>Study: ${jsonData.study}</p>
    //   <p>City: ${jsonData.city}</p>
    //   <p>Hobbies: ${jsonData.hobbies.join(", ")}</p>
    //   <p>Favorite Movies: ${jsonData["favourite-movies"].join(", ")}</p>
    //   <p>Gamen: ${jsonData.gamen ? "Yes" : "No"}</p>
    //   <p>Avatar URL: ${jsonData.avatar.url}</p>
    //   <p>Avatar Alternative Text: ${jsonData.avatar.alternativeText}</p>
    // `;

    // Naam (Bart) laten zien naast de afbeelding
    // Selecteer de juiste ID uit de html
    const nameElement = document.getElementById("name");
    // Alleen 'name' laden uit het JSON bestand
    nameElement.innerText = jsonData.name;

    const nameHeroes = document.getElementById("heroes");
    // nameHeroes.innerText = jsonData.superheroes;

    const nameVillains = document.getElementById("villains");
    // nameVillains.innerHTML = jsonData.villains;

    // Maak een lege ongeordende lijst aan
    const olVillains = document.createElement("ol");
    const olHeroes = document.createElement("ol");

    // Voor elk schurknaam in de JSON-array
    jsonData.villains.forEach(villain => {
        const liElement = document.createElement("li");
        liElement.textContent = villain;
        olVillains.appendChild(liElement);
    });

    // heroes
    jsonData.superheroes.forEach(superheroes => {
      const liElement = document.createElement("li");
      liElement.textContent = superheroes;
      olHeroes.appendChild(liElement);
  });

    // Voeg de ongeordende lijst toe aan het HTML-element met het id "villains"
    nameVillains.appendChild(olVillains);
    nameHeroes.appendChild(olHeroes);

  } else if (request.readyState === 4 && request.status !== 200) {
    // Als het niet lukt, laat een error zien
    jsonContentDiv.innerHTML = "Error while loading data from JSON";
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



// //Github readme inladen
// const username = 'Bart-Spons';
// const repository = 'web-app-from-scratch-2324';
// const imageLink = 'https://github.com/Bart-Spons/web-app-from-scratch-2324/assets/62010539/6b1bbf0a-69f6-4d74-8b95-6f930357fbf2';


// fetch(`https://api.github.com/repos/${username}/${repository}/readme`)
// // // fetch(`https://github.com/Bart-Spons/web-app-from-scratch-2324/blob/main/README.md`)
//     .then(response => response.json())
//     .then(data => {
//         const readmeContent = atob(data.content); //alle data in content
//         //filter
        
//         const readmeDiv = document.getElementById('readme-github');
//         readmeDiv.innerHTML = readmeContent;
//     })
//     .catch(error => console.error(error));

/////////////////
// alles laden //
/////////////////

// document.addEventListener('DOMContentLoaded', function() {
//   const username = 'Bart-Spons';
//   const repository = 'web-app-from-scratch-2324';
//   const imageSchets = 'https://github.com/Bart-Spons/web-app-from-scratch-2324/assets/62010539/6b1bbf0a-69f6-4d74-8b95-6f930357fbf2'; 
  
//   fetch(`https://api.github.com/repos/${username}/${repository}/readme`)
//   // // fetch(`https://github.com/Bart-Spons/web-app-from-scratch-2324/blob/main/README.md`)
//       .then(response => response.json())
//       .then(data => {
//           const readmeContent = atob(data.content); //alle data in content
          
//           const readmeDiv = document.getElementById('readme-github');
//           readmeDiv.innerHTML = readmeContent;
//           //eerst parsen (markdown parsen)

//       })
//       .catch(error => console.error(error));

// // Een specifieke afbeelding laten zien
//   function displayImage(imageSchets) {
//       // Create img element
//       const img = document.createElement('img');
//       img.src = imageSchets;

//       // Display img element in imageContainer
//       const imageContainer = document.getElementById('image-container-github');
//       imageContainer.appendChild(img);
//   }

//   // Call de functie
//   displayImage(imageSchets);
// });

