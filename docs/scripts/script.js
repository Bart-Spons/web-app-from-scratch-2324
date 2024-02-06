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
