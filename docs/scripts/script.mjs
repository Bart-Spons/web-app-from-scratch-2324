/* ------------------------------------------ */
/*             TABLE OF CONTENTS
/* ------------------------------------------ */
/*   01 - Loading screen  */
/*   02 - Github API  */
/*   03 - http request naar json  */
/*   04 - menu  */
/*   05 - dropdown  */
/*   06 - Animation  */

/* ------------------------------------------ */

// Loading screen
document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
      document.getElementById("loading-screen").style.display = "none";
  }, 2000); // Verberg het laadscherm na 2 seconden
});

// import modules
import { unified } from 'https://esm.sh/unified@11?bundle';
import remarkParse from 'https://esm.sh/remark-parse@11?bundle';
import remarkRehype from 'https://esm.sh/remark-rehype@11?bundle';
import rehypeStringify from 'https://esm.sh/rehype-stringify@8?bundle';

// If "live" is shown in console, the script is working
main().then(() => console.log("live"))

// Show all content from the github readme on the page
document.addEventListener('DOMContentLoaded', function() {

  // Create a processor that uses remark and rehype
  // to parse markdown to HTML
  // and stringify HTML to a string
  // The processor is used to process the content of the process
  const processor = unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(rehypeStringify);

  // The username and repository name
  const username = 'Bart-Spons';
  const repository = 'web-app-from-scratch-2324';

  // Fetch the process from the GitHub API
  fetch(`https://api.github.com/repos/${username}/${repository}/process.md`)

      // Parse the response as JSON
      // and decode the content of the readme
      // and process the content with the processor
      .then(response => response.json())
      .then(data => processor.process(atob(data.content)))
      .then(output => {
        
          // Select the div where the processed HTML will be placed
          const consoleDataDiv = document.getElementById('consoleData');
          // Set the processed HTML as innerHTML of the div
          consoleDataDiv.innerHTML = String(output);
      })
      // Catch any errors and log them to the console
      .catch(error => console.error(error));
});

// Fetch data from the internet
async function main () {
    const data = await fetch('https://wwww.google.nl')
    const json = await data.json()
}


// Make const for the json-content div
const jsonContentDiv = document.getElementById("json-content");

// Make an http request to the json file
const request = new XMLHttpRequest();
// Get the json data from the internet
request.open("GET", "https://bart-spons.github.io/web-app-from-scratch-2324/json/bart.json", true);

// Check if the request is done
request.onreadystatechange = function () {
  // The 4 means that the request is done and the data is collected
  // If the request is done and the status is 200
  if (request.readyState === 4 && request.status === 200) {
    // Parse the JSON response
    const jsonData = JSON.parse(request.responseText);

    // Show the name 'Bart' on the website
    // Select the element with the id "name"
    const nameElement = document.getElementById("name");
    // Set the inner text of the element to the name from the JSON
    nameElement.innerText = jsonData.name;

    // Make a const for the heroes and villains
    const nameHeroes = document.getElementById("heroes");
    const nameVillains = document.getElementById("villains");
    
    // Maak an empty ordered list for the heroes and villains
    const olVillains = document.createElement("ol");
    const olHeroes = document.createElement("ol");

    // Every villain name gets a list item
    jsonData.villains.forEach(villain => {
        const liElement = document.createElement("li");
        liElement.textContent = villain;
        olVillains.appendChild(liElement);
    });

    // Every hero name gets a list item
    jsonData.superheroes.forEach(superheroes => {
      const liElement = document.createElement("li");
      liElement.textContent = superheroes;
      olHeroes.appendChild(liElement);
  });

    // Add the ordered list to the div
    nameVillains.appendChild(olVillains);
    nameHeroes.appendChild(olHeroes);

  } else if (request.readyState === 4 && request.status !== 200) {
    // If it doesn't work, show an error message
    jsonContentDiv.innerHTML = "Error while loading data from JSON";
  }
};

// Send the request
request.send();

//menu
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

// When the menu icon is clicked, show the nav links
menuIcon.addEventListener('click', () => {
    // show the nav links
    navLinks.classList.toggle('show'); 
});

//dropdown
document.addEventListener('DOMContentLoaded', function() {
  // Github element
  const githubLink = document.getElementById('github-toggle');
  const githubDropdown = document.getElementById('dropdown-content');

  // Click on github to see the dropdown
  githubLink.addEventListener('click', function(event) {
      event.preventDefault();
      githubDropdown.classList.toggle('expanded');
  });
});


// Animation
const imageContainer = document.getElementById('image-container');
let animationInterval;
// Keeps track of the current image index
let currentImageIndex = 0; 

// Function to start the loop
function startAnimationLoop() {
    const images = imageContainer.querySelectorAll('.image');
    // Start with the current image index
    let index = currentImageIndex; 

    // Set and interval to change the images
    animationInterval = setInterval(() => {
        // Hide all images
        images.forEach(image => image.style.opacity = 0);
        // Show the current image 
        images[index].style.opacity = 1; 
        // Go to the next image
        index = (index + 1) % images.length; 
        // Update the current image
        currentImageIndex = index; 
        // Change every second
    }, 100);
}

// Function to stop the loop
function stopAnimationLoop() {
    // Clear the interval
    clearInterval(animationInterval);
}

// Add event listeners for the hover, over the image and then leaving the image
imageContainer.addEventListener('mouseenter', startAnimationLoop);
imageContainer.addEventListener('mouseleave', stopAnimationLoop);


