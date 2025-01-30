// Function to update UTC time
function updateUTCTime() {
  const utcTimeElement = document.getElementById("utc-time");
  const now = new Date();
  utcTimeElement.textContent = "UTC Time: " + now.toUTCString();
}

// Call the function when the page loads
updateUTCTime();
