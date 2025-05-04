// Function to store user preference
function savePreference(key, value) {
  localStorage.setItem(key, value);
}

// Function to retrieve user preference
function getPreference(key) {
  return localStorage.getItem(key);
}

// Example usage: save and apply user-selected theme color
document.getElementById('themeButton').addEventListener('click', function() {
  document.body.style.backgroundColor = '#f4f4f4';
  savePreference('theme', '#f4f4f4');
});

// Apply stored theme on load
window.onload = function() {
  let storedTheme = getPreference('theme');
  if (storedTheme) {
      document.body.style.backgroundColor = storedTheme;
  }
};