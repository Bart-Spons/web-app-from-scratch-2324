// Get a reference to the div where we will display the JSON data
const jsonContentDiv = document.getElementById("json-content");

// Make an XMLHttpRequest to load the JSON file
const xhr = new XMLHttpRequest();
xhr.open("GET", "./json/bart.json", true);

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    // Parse the JSON response
    const jsonData = JSON.parse(xhr.responseText);

    // Display the JSON data in the div
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
  } else if (xhr.readyState === 4 && xhr.status !== 200) {
    // Handle errors if the JSON file couldn't be loaded
    jsonContentDiv.innerHTML = "Error loading JSON data";
  }
};

// Send the XMLHttpRequest
xhr.send();

// Add scroll event listener to update the active link based on the scroll position
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  sections.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (window.scrollY >= sectionTop - 50 && window.scrollY < sectionTop + sectionHeight - 50) {
          navLinks.forEach((link) => link.classList.remove('active'));
          navLinks[index].classList.add('active');
      }
  });
});

const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show'); // Toggle the 'show' class for the navigation links
});

document.addEventListener('DOMContentLoaded', function() {
  // Get the GitHub link element
  const githubLink = document.querySelector('.github-toggle');

  // Get the GitHub dropdown content
  const githubDropdown = document.querySelector('.dropdown-content');

  // Toggle the dropdown on GitHub link click
  githubLink.addEventListener('click', function(event) {
      event.preventDefault();
      githubDropdown.classList.toggle('expanded');
  });
});

