function togglePattern() {
  // get the pattern
  var myPattern = document.getElementById('pattern');

  // also get the id of reveal button, so we can change what it says
  var patternButton = document.getElementById('patternButton');

  // now toggle the pattern and the button text, depending on current state using classList
  myPattern.classList.toggle("invisible");
  var btnText = patternButton.textContent;
  if (btnText === "Reveal!") {
    patternButton.textContent = "Hide Content!";
  } else if (btnText === "Hide Content!") {
    patternButton.textContent = "Reveal!";
  }
  

}