/*function showMessage(id) {
    alert(id);
}*/

// Current visible section
var currentSection = 1;

function showMessage(section) {
  // Hide the current section
  document.getElementById(currentSection.toString()).classList.add("hidden");

  // Remove the 'selected' class from the current button
  document.getElementById("btn" + currentSection.toString()).classList.remove("selected");

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

  // Add the 'selected' class to the new current button
  document.getElementById("btn" + currentSection.toString()).classList.add("selected");

  let r = document.getElementById("Right");
  let l = document.getElementById("Left");

  if (currentSection >= 9) {
    r.classList.add("arrowsHidden")

  } else {
    r.classList.remove("arrowsHidden")
  }

  if (currentSection <= 1) {
    l.classList.add("arrowsHidden")
  } else {
    l.classList.remove("arrowsHidden")
  }
}


// When the page loads, show the first section
window.onload = function () {
  showMessage(1);
};