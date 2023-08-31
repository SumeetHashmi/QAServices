// // Get references to the message and button elements
// const cookieMessage = document.getElementById('cookie-message');
// const acceptBtn = document.getElementById('accept-cookies-btn');

// // Function to hide the message and store user's preference
// function acceptCookies() {
//   // Store user preference (e.g., using localStorage)
//   localStorage.setItem('cookiesAccepted', 'true');
  
//   // Hide the message
//   cookieMessage.style.display = 'none';
// }

// // Add event listener to the "Accept" button
// acceptBtn.addEventListener('click', acceptCookies);

// // Check if the user has already accepted cookies
// const cookiesAccepted = localStorage.getItem('cookiesAccepted');
// if (cookiesAccepted === 'true') {
//   cookieMessage.style.display = 'none';
// } else {
//   cookieMessage.style.display = 'block';
// }
const cookieMessage = document.getElementById('cookie-message');
const acceptBtn = document.getElementById('accept-cookies-btn');
const rejectBtn = document.getElementById('reject-cookies-btn');

// Function to handle accepting cookies
function acceptCookies() {
  // Store user preference (e.g., using localStorage)
  localStorage.setItem('cookiesAccepted', 'true');
  
  // Hide the message
  cookieMessage.style.display = 'none';
}

// Function to handle rejecting cookies
function rejectCookies() {
  // Store user preference (e.g., using localStorage)
  localStorage.setItem('cookiesAccepted', 'false');
  
  // Hide the message
  cookieMessage.style.display = 'none';
}

// Add event listener to the "Accept" button
acceptBtn.addEventListener('click', acceptCookies);

// Add event listener to the "Reject" button
rejectBtn.addEventListener('click', rejectCookies);

// Check if the user has already accepted or rejected cookies
const cookiesAccepted = localStorage.getItem('cookiesAccepted');
if (cookiesAccepted === 'true') {
  cookieMessage.style.display = 'none';
} else if (cookiesAccepted === 'false') {
  cookieMessage.style.display = 'none';
} else {
  cookieMessage.style.display = 'block';
}