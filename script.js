/*function showMessage(id) {
    alert(id);
}*/

// Current visible section
let currentSection = 1;

function showMessage(section) {
  // Hide the current section
  document.getElementById(currentSection.toString()).classList.add("hidden");

  if (section === "Left") {
    // Go to the previous section
    currentSection = currentSection > 1 ? currentSection - 1 : 9;
  } else if (section === "Right") {
    // Go to the next section
    currentSection = currentSection < 9 ? currentSection + 1 : 1;
  } else {
    // Go to the specified section
    currentSection = section;
  }

  // Show the new current section
  document.getElementById(currentSection.toString()).classList.remove("hidden");
}

// When the page loads, show the first section
window.onload = function () {
  showMessage(1);
};


