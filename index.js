// index.js

// Function to handle some functionality when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Select an element with the id "app" from the DOM
  const appElement = document.getElementById('app');

  // Create a new paragraph element
  const paragraphElement = document.createElement('p');

  // Set the text content of the paragraph
  paragraphElement.textContent = 'Hello, this content is added dynamically using JavaScript!';

  // Append the paragraph element to the "app" element
  appElement.appendChild(paragraphElement);

  // Add an event listener to the paragraph element
  paragraphElement.addEventListener('click', function () {
    alert('You clicked the paragraph!');
  });
});
